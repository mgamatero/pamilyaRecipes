export interface Recipe{
  id?:string;
  addedBy:string;
  instructions:string[];
  ingredients:string[];
  name:string;
  type:string;
  image?:string;
}
