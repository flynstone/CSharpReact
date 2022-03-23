import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Article } from "../models/article";
import { v4 as uuid } from 'uuid';

export default class ArticleStore {
  articles: Article[] = [];
  // Union type undefined to allow undefined **Typescript
  selectedArticle: Article | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this)
  }

  // Async function to load articles
  loadArticles = async () => {
    this.setLoadingInitial(true);

    // Using mobx to mutate object directly
    try {
      const articles = await agent.Articles.list();     
      articles.forEach(article => {
        article.dateCreated = article.dateCreated.split('T')[0];
        this.articles.push(article);
      }); 
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  }

  setLoadingInitial = ( state: boolean ) => {
    this.loadingInitial = state;
  }


  selectArticle = (id: string) => {
    this.selectedArticle = this.articles.find(x => x.id === id);
  }

  cancelSelectedArticle = () => {
    this.selectedArticle = undefined;
  }

  openForm = (id?: string) => {
    id ? this.selectArticle(id) : this.cancelSelectedArticle();
    this.editMode = true;
  }

  closeForm = () => {
    this.editMode = false;
  }

  createArticle = async (article: Article) => {
    this.loading = true;
    article.id = uuid();

    try {
      await agent.Articles.create(article);
      runInAction(() => {
        this.articles.push(article);
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
        this.articles = [...this.articles.filter(x => x.id !== article.id), article];
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
}