import *as service from "../services/products.service.js";

export const getAllProducts = (req,res) => {
    res.json(service.getAllProducts());
  }

export const SearchProducts = (req,res) => {
  console,log(req.query);
  const { name } = req.query;
  const product = service.getAllProducts()
  const filteredProducts=products.filter((P) =>
     P.name.toLowerCase().includes(name.toLowerCase())
);

  res.json(filteredProducts);
 }

 export const getProductById = (req,res) => {   
   const {id}= req.params;
   const product = service.getProductById(id);

   if(!product){
      res.status(404).json({error:"No existe producto"});
   }
   res.json(product);
 }

 export const createProduct =(req,res)=>{
  const{name , price}= req.body;

 const newProduct= service.createProduct({name , price});
  res.status(201).json(newProduct);
 }

 export const ModifyProduct = (req,res) => {
  const productId = parseInt(req.params.id,10);
  const productIndex = products.findIndex((p) =>p.id === productId);

  if(productIndex === -1){
    return res.status(404).json({error: "Producto no encontrado"})
  }

  const {name , price}=req.body;

  products[productIndex]={id:productId, name,price}; // pisa los elementos
  res.json(products[productIndex]);

 }

 export const deleteProduct = (req, res)=>{
    const productId = parseInt(req.params.id,10);
    const product = service.deleteProduct(productId);
      if(!product){
    return res.status(404).json({error: "Producto no encontrado"});
  }
    
    res.status(202).send();
  }