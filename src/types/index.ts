export interface Phrase {
  id: string;
  english: string;
  french: string;
  audioSrc: string;
  category: string;
  emoji?: string;
  animation?: string;
}

export type Category = {
  id: string;
  name: string;
  description: string;
};