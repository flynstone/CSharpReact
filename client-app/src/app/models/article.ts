import { Profile } from "./profile";

export interface Article {
  id: string;
  title: string;
  body: string;
  dateCreated: string;
  creatorUsername?: string;
  isClosed?: boolean;
  isCreator?: boolean;
  creator?: Profile;
  contributors?: Profile[]
}