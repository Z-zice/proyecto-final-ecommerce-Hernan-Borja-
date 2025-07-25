
import *as model from "../models/products.model.js";
 export const getAllProducts=() =>{
    return model.getAllProducts();
 }

 export const getProductById= (id)=>{
    return model.getProductById(id);
 }

 export const createProduct = ({name ,stock,descripcion,color,precie})=>{
   return model.createProduct({name ,stock,descripcion,color,precie});
 }
 export const deleteProduct = (productId)=>{
   return model.deleteProduct(productId);
 }