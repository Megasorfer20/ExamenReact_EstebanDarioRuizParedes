import { ObjectId } from "mongodb";
import { conexion } from "../db/conexion.js";

const getCategorias = async (req,res) => {
    const coneccion = await conexion()
    const categorias = await coneccion.categoria.find({}).toArray()
    res.json(categorias)
};
const getOneCategorias = () => {};
const postCategorias = () => {};

export { getCategorias, getOneCategorias, postCategorias };
