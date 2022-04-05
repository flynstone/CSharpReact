import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { makeAutoObservable, runInAction } from "mobx";
import { ChatComment } from "../models/comment";
import { store } from "./store";

export default class CommentStore {
  comments: ChatComment[] = [];
  hubConnection: HubConnection | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  // Create SignalR connection
  createHubConnection = (articleId: string) => {
    if (store.articleStore.selectedArticle) {
      this.hubConnection = new HubConnectionBuilder()
        .withUrl('http://localhost:4000/chat?articleId=' + articleId, {
          // Pass token to signalR
          accessTokenFactory: () => store.userStore.user?.token!
        })
        .withAutomaticReconnect()
        .configureLogging(LogLevel.Information)
        .build();
      
      
      // Start SignalR connection
      this.hubConnection.start().catch(error => console.log('Error establishing the connection: ', error));

      // load comments with SignalR connection
      this.hubConnection.on('LoadComments', (comments: ChatComment[]) => {
        runInAction(() => this.comments = comments);
      });

      // receive comments with SignalR connection
      this.hubConnection.on('ReceiveComment', (comment: ChatComment) => {
        runInAction(() => this.comments.push(comment));
      });
    }
  } 

  stopHubConnection = () => {
    this.hubConnection?.stop().catch(error => console.log('Error stopping connection', error));
  }

  clearComments = () => {
    this.comments = [];
    this.stopHubConnection();
  }
}