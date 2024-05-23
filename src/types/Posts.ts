// src/types/post.ts
import { Entity } from "./Entity";

export interface Post {
  categories: Entity[];
  content: string | null;
  contentType: Entity;
  description: string;
  images: string[];
  keyword: string | null;
  language: string;
  publishDate: string;
  searchKeys: string | null;
  slug: string;
  tags: Entity[];
  title: string;
}
