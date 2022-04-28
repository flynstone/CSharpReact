import { makeAutoObservable, reaction, runInAction } from "mobx";
import agent from "../api/agent";
import { Article } from "../models/article";
import { Pagination, PagingParams } from "../models/pagination";
import { store } from "./store";

export default class ArticleStore {
  articles: Article[] = [];
  articleRegistry = new Map<string, Article>();
  // Union type undefined to allow undefined **Typescript
  selectedArticle: Article | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitial = false;
  pagination: Pagination | null = null;
  pagingParams = new PagingParams();
  predicate = new Map().set('all', true);

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.predicate.keys(),
      () => {
        this.pagingParams = new PagingParams();
        this.articleRegistry.clear();
        this.loadArticles();
      }
    )
  }

  setPagingParams = (pagingParams: PagingParams) => {
    this.pagingParams = pagingParams;
  }

  setPredicate = (predicate: string, value: string | Date) => {
    const resetPredicate = () => {
      this.predicate.forEach((value, key) => {
        if (key !== 'startDate') this.predicate.delete(key);
      })
    }
    switch (predicate) {
      case 'all':
        resetPredicate();
        this.predicate.set('all', true);
        break;
      case 'isContributor':
        resetPredicate();
        this.predicate.set('isContributor', true);
        break;
      case 'isCreator':
        resetPredicate();
        this.predicate.set('isCreator', true);
        break;
      case 'startDate':
        this.predicate.delete('startDate');
        this.predicate.set('startDate', value);
    }
  }

  get axiosParams() {
    const params = new URLSearchParams();
    params.append('pageNumber', this.pagingParams.pageNumber.toString());
    params.append('pageSize', this.pagingParams.pageSize.toString());
    this.predicate.forEach((value, key) => {
      if (key === 'startDate') {
        params.append(key, (value as Date).toISOString())
      } else {
        params.append(key, value);
      }
    })
    return params;
  }

  get articlesByDate() {
    return Array.from(this.articleRegistry.values()).sort(
      (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
    );
  }

  get groupedArticles() {
    return Object.entries(
      this.articlesByDate.reduce((articles, article) => {
        const date = article.createdAt;
        articles[date] = articles[date]
          ? [...articles[date], article]
          : [article];
        return articles;
      }, {} as { [key: string]: Article[] })
    );
  }

  // Async function to load articles
  loadArticles = async () => {
    // Using mobx to mutate object directly
    try {
      const result = await agent.Articles.list(this.axiosParams);     
      result.data.forEach(article => {
        this.setArticle(article);
      }); 
      this.setPagination(result.pagination);
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  }

  setPagination = (pagination: Pagination) => {
    this.pagination = pagination;
  }

  loadArticle = async (id: string) => {
    let article = this.getArticle(id);
    if (article) {
      this.selectedArticle = article;
      return article;
    } else {
      this.loadingInitial = true;
      
      try {
        article = await agent.Articles.details(id);
        this.setArticle(article);
        runInAction(() => {
          this.selectedArticle = article;
        });
        this.setLoadingInitial(false);
        return article;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  }

  private getArticle = (id: string) => {
    return this.articleRegistry.get(id);
  }

  private setArticle = (article: Article) => {
    const user = store.userStore.user;
    if (user) {
      article.isCreator = article.creatorUsername === user.username;
      article.creator = article.contributors?.find(x => x.username === article.creatorUsername);
    }
    article.createdAt = article.createdAt.split("T")[0];
    this.articleRegistry.set(article.id, article);
  }

  setLoadingInitial = ( state: boolean ) => {
    this.loadingInitial = state;
  }


  createArticle = async (article: Article) => {
    this.loading = true;
    try {
      await agent.Articles.create(article);
      runInAction(() => {
        this.articleRegistry.set(article.id, article);
        this.selectedArticle = article;
        this.editMode = false;
        this.loading = false;
      })
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  updateArticle = async (article: Article) => {
    this.loading = true;

    try {
      await agent.Articles.update(article);
      runInAction(() => {
        this.articleRegistry.set(article.id, article);
        this.selectedArticle = article;
        this.editMode = false;
        this.loading = false;
      })
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  deleteArticle = async (id: string) => {
    this.loading = true;

    try {
      await agent.Articles.delete(id);
      runInAction(() => {
        this.articleRegistry.delete(id);
        this.loading = false;
      })
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  updateArticleFollowing = (username: string) => {
    this.articleRegistry.forEach(article => {
      article.contributors?.forEach(contributor => {
        if (contributor.username === username) {
          contributor.following ? contributor.followersCount-- : contributor.followersCount++
          contributor.following = !contributor.following;
        }
      })
    })
  }

  clearSelectedArticle = () => {
    this.selectedArticle = undefined;
  }
}