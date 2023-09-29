const express = require("express")

const router = express.Router()

const FornecedorController = require('../controller/fornecedor.controller')


router.get("/list", FornecedorController.listFornecedor)
router.post("/create", FornecedorController.createFornecedor)



module.exports = router