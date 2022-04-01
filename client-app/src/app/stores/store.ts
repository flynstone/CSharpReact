import { createContext, useContext } from "react";
import ArticleStore from "./articleStore";
import CommonStore from "./commonStore";
import UserStore from "./userStore";

interface Store {
  articleStore: ArticleStore;
  commonStore: CommonStore;
  userStore: UserStore;
}

export const store: Store = {
  articleStore: new ArticleStore(),
  commonStore: new CommonStore(),
  userStore: new UserStore()
}

export const StoreContext = createContext(store);

// React hook
export function useStore() {
  return useContext(StoreContext);
}