import express from "express";
import {getProducts, saveProduct} from "../controllers/productController.js";

const router = express.Router();

router.get('/', getProducts);

router.post('/', saveProduct);


export default router;