import { getFirestore,collection, getDocs, query, where,doc, getDoc,addDoc } from "firebase/firestore"
import {app} from "./config"

const db = getFirestore(app)

export const getProductos = async () => {
    const querySnapshot = await getDocs(collection(db, "productos"))
    const productos = []
    
    querySnapshot.forEach((doc) => {
      productos.push(doc.data());
    });
    return productos
}

export const getCategoriaProductos = async (categorias) => {
  const q = query(collection(db, "productos"), where("categoria", "==", categorias))
  const productos =[]
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    productos.push(doc.data());
  });
  return productos
  
}

export const getProductoId = async (id) => {
  
  const docRef = doc(db, "productos", id);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return docSnap.data()
  } else {
  
    console.log("No such document!");
  }
}

export const crearOrden = async (ordenDeCompra) => {
  try {
    const docRef = await addDoc(collection(db, "ordendecompras"), ordenDeCompra);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}