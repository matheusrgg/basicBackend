const Fornecedor = require('../model/Fornecedor')


class FornecedorController {
  constructor() { }

  static async listFornecedor(req, res) {
    const fornecedor = await Fornecedor.findAll()
    return res.status(201).send(fornecedor);
  }

  static async createFornecedor(req, res) {
    try {
      const { nome, email, descricao,  cnpj, } = req.body;
      const data = {
        nome,
        email,
        descricao,
        cnpj,
      };
      //saving the user
      const userName = await Fornecedor.create(data);
      return res.status(201).send(userName);
    } catch (error) {
      console.log(error);
    }
  }

 
}

module.exports = FornecedorController