import { Product } from "./product";
import { ResponseModel } from "./responseModel";

export interface ProductResponsemodel extends ResponseModel{
  data:Product[]
}
