import { createContext, useContext } from "react";
import ArticleStore from "./articleStore";

interface Store {
  articleStore: ArticleStore
}

export const store: Store = {
  articleStore: new ArticleStore()
}

export const StoreContext = createContext(store);

// React hook
export function useStore() {
  return useContext(StoreContext);
}