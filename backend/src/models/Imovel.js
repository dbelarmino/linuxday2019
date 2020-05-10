const { Schema, model } = require("mongoose");
const ImovelSchema = new Schema({
  nome: {
    type: String
  },
  descricao: {
    type: String
  },
  endereco: {
    type: String
  },
  valor: {
    type: Number
  }
});

module.exports = model("Imovel", ImovelSchema);
