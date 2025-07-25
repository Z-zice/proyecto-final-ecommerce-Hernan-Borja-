import { Router } from "express";

const router = Router();

import {getAllProducts,
        SearchProducts,
        getProductById,
        createProduct,
        ModifyProduct,
        deleteProduct,
} from "../controllers/products.controller.js";
import {auth} from "../middlewares/auth.middleware.js"
router.get("/products",getAllProducts );
 

router.get("/product/search",SearchProducts);

router.get("/products/:id",auth,getProductById);

router.post("/products",createProduct);

router.put("/products/:id",ModifyProduct);

router.delete("/products/:id",deleteProduct);

 

export default router;