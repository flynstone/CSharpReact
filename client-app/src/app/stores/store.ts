import { createContext, useContext } from "react";
import ArticleStore from "./articleStore";
import CommonStore from "./commonStore";

interface Store {
  articleStore: ArticleStore;
  commonStore: CommonStore;
}

export const store: Store = {
  articleStore: new ArticleStore(),
  commonStore: new CommonStore()
}

export const StoreContext = createContext(store);

// React hook
export function useStore() {
  return useContext(StoreContext);
}