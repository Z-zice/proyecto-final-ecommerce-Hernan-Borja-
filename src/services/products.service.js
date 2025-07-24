
import *as model from "../models/products.model.js";
 export const getAllProducts=() =>{
    return model.getAllProducts();
 }

 export const getProductById= (id)=>{
    return model.getProductById(id);
 }

 export const createProduct = ({name , price})=>{
   return model.createProduct({name , price});
 }
 export const deleteProduct = (productId)=>{
   return model.deleteProduct(productId);
 }