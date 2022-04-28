import { Profile } from "./profile";

export interface Article {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  creatorUsername?: string;
  isClosed?: boolean;
  isCreator?: boolean;
  creator?: Profile;
  contributors?: Profile[]
}