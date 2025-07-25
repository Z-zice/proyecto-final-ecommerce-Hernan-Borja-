import "dotenv/config"
import express from "express";
import cors from "cors";
 const app = express();


  app.use(cors());
  app.use(express.json());

  import {auth} from "./src/middlewares/auth.middleware.js";
  import productsRouter from "./src/routes/products.router.js";
  app.use("/api",auth,productsRouter);

  import authRouter from "./src/routes/auth.routers.js";
  app.use("/api",authRouter);

     app.use((req,res,next)=>{
    res.status(404).json({error: "Not Found"});
  });

 
 
  

 const PORT = process.env.PORT || 3001;
 app.listen(PORT,() => console.log(`http://localhost:${PORT}`));