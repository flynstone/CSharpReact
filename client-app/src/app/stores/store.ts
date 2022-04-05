import { createContext, useContext } from "react";
import ArticleStore from "./articleStore";
import CommonStore from "./commonStore";
import ModalStore from "./modalStore";
import ProfileStore from "./profileStore";
import UserStore from "./userStore";

interface Store {
  articleStore: ArticleStore;
  commonStore: CommonStore;
  userStore: UserStore;
  modalStore: ModalStore;
  profileStore: ProfileStore;
}

export const store: Store = {
  articleStore: new ArticleStore(),
  commonStore: new CommonStore(),
  userStore: new UserStore(),
  modalStore: new ModalStore(),
  profileStore: new ProfileStore()
}

export const StoreContext = createContext(store);

// React hook
export function useStore() {
  return useContext(StoreContext);
}