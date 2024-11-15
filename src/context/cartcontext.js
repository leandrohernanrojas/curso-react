import { createContext, useContext } from "react";

export const carritoContexto = createContext()
export const useCarrito = () => useContext(carritoContexto)