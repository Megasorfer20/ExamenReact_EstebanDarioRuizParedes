import {Router} from "express";
import {getCategorias, getOneCategorias, postCategorias} from './categorias.controller.js'
const appCategorias = Router()

appCategorias.get("/",getCategorias)

export default appCategorias