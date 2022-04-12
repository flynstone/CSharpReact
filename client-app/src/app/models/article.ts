import { Profile } from "./profile";

export interface Article {
  id: string;
  title: string;
  body: string;
  dateCreated: Date | null;
  creatorUsername?: string;
  isClosed?: boolean;
  isCreator?: boolean;
  creator?: Profile;
  contributors?: Profile[]
}