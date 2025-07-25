import fs from "fs";
import path from "path";
import { stringify } from "querystring";

const __dirname = import.meta.dirname;

const jsonPath = path.join(__dirname, "./products.json");

const json = fs.readFileSync(jsonPath, "utf-8");

const products = JSON.parse(json);

import {db} from "./data.js";
import {collection,getDocs,doc ,getDoc, addDoc,deleteDoc} from "firebase/firestore";
const productCollection = collection(db,"products");



export const getAllProducts = async ()=>{
    try{
        const snapshot = await getDocs(productCollection);
        return snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()}));
    }catch(error){
        console.error(error);
    }
}

export const getProductById = async (id) => {
   try{
    const productRef =doc(productCollection,id);
    const snapshot = await getDoc(productRef);
    return snapshot.exists()?{id: snapshot.id, ...snapshot.data()}:null;
   }catch(error){
    console.error(error);
   }
}

export const createProduct= async(data)=>{
    try{
      const docRef = await addDoc(productCollection,data);
      return {id: docRef.id, ...data};
    }catch(error){
      console.error(error);
    }
  };

export const deleteProduct= async(id)=>{
  try{
    const productRef = doc(productCollection,id);
    const snapshot = await getDoc(productRef);
    if(!snapshot.exists()){
      return false;
    }
    await deleteDoc(productRef);
    return true;
  }catch(error){
    console.error(error);
  }
    
};