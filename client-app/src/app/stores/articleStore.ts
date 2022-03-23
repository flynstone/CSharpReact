import { makeAutoObservable } from "mobx";
import agent from "../api/agent";
import { Article } from "../models/article";

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
}