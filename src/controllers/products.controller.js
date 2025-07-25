import *as service from "../services/products.service.js";

export const getAllProducts = async (req,res) => {
    res.json(await service.getAllProducts());
  }

export const SearchProducts = (req,res) => {
  console,log(req.query);
  const { name } = req.query;
  const product = service.getAllProducts()
  const filteredProducts=product.filter((P) =>
     P.name.toLowerCase().includes(name.toLowerCase())
);

  res.json(filteredProducts);
 }

 export const getProductById =async (req,res) => {   
   const {id}= req.params;
   const product =await service.getProductById(id);

   if(!product){
      res.status(404).json({error:"No existe producto"});
   }
   res.json(product);
 }

 export const createProduct =async(req,res)=>{
  const{name ,stock,descripcion,color,precie}= req.body;

 const newProduct= await service.createProduct({name ,stock,descripcion,color,precie});
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

 export const deleteProduct = async(req, res)=>{
    const productId = req.params.id;
    const product = await service.deleteProduct(productId);
      if(!product){
    return res.status(404).json({error: "Producto no encontrado"});
  }
    
    res.status(202).send();
  }