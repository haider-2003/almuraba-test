import { Entity } from "./Entity";
export interface Categories {
    id:number;
    name:string;
    slug:string;
    type?:Entity
}