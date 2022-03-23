import { makeObservable, observable } from "mobx";

export default class ArticleStore {
  title = 'Hello from mobx';

  constructor() {
    makeObservable(this, {
      title: observable
    });
  }
}