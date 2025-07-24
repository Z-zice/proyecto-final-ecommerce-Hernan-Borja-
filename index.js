import "dotenv/config"
import express from "express";
import cors from "cors";
 const app = express();


  app.use(cors());
  app.use(express.json());


  import productsRouter from "./src/routes/products.router.js";
  app.use("/api",productsRouter);

     app.use((req,res,next)=>{
    res.status(404).json({error: "Not Found"});
  });

 
 
  

 const PORT = process.env.PORT || 3001;
 app.listen(PORT,() => console.log(`http://localhost:${PORT}`));