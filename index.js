import express from "express";
import cors from "cors";
 const app = express();

 const products = [
   {id:1, name:"Product 1", price:100},
   {id:2, name:"Product 2", price:200},
   {id:3, name:"Product 3", price:300}
 ];

  app.use(cors());
  app.use(express.json());
 
  app.get("/products", (req,res) => {
    res.json(products);
  });
 

  app.get("/product/search" ,(req,res) => {
  console,log(req.query);
  const { nombre } = req.query;
  const filteredProducts=products.filter((P) =>
     P.nombre.toLowerCase().includes(nombre.toLowerCase())
);

  res.json(filteredProducts);

 })

 app.get("/products/:id" ,(req,res) => {   
   console.log(req.params.id);
   const product = products.find((item) => item.id == req.params.id); 
   if(!product){
      res.status(404).json({error:"No existe producto"});
   }
   res.json(product);
 });

 app.post("/products",(req,res)=>{
  const{name , price}= req.body;

  const newProduct ={
    id: products.length +1,
    name,
    price,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
 });

 app.put("/products/:id",(req,res) => {
  const productId = parseInt(req.params.id,10);
  const productIndex = products.findIndex((p) =>p.id === productId);

  if(productIndex === -1){
    return res.status(404).json({error: "Producto no encontrado"})
  }

  const {name , price}=req.body;

  products[productIndex]={id:productId, name,price}; // pisa los elementos
  res.json(products[productIndex]);

 });

  app.delete("/products/:id",(req, res)=>{
    const productId = parseInt(req.params.id,10);
    const productIndex = products.findIndex((p) =>p.id === productId);
    if(productIndex === -1){
    return res.status(404).json({error: "Producto no encontrado"});
  }
  products.splice(productIndex,1);
  res.status(202).send();
  });

  app.use((req,res,next)=>{
    res.status(404).json({error: "Not Found"});
  });
 

 const PORT = 3000;
 app.listen(PORT,() => console.log(`http://localhost:${PORT}`));