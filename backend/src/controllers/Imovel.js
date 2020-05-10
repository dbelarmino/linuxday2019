const Imovel = require("../models/Imovel");
module.exports = {
  async findAll(req, res) {
    const imovel = await Imovel.find();

    return res.send({ imovel });
  },
  async findOne(req, res) {
    const { id } = req.params;

    const imovel = await Imovel.findById({ _id: id });

    if (!imovel) return res.send({ ok: true });

    return res.send({ imovel });
  },
  async create(req, res) {
    const { nome, descricao, endereco, valor } = req.body;

    const imovel = await Imovel.create({
      nome,
      descricao,
      endereco,
      valor
    });

    if (!imovel) return res.send({ ok: false });

    return res.send({ ok: true });
  },
  async update(req, res) {
    const { id } = req.params;
    const { nome, descricao, endereco, valor } = req.body;

    const imovel = await Imovel.findById({ _id: id });

    if (!imovel) return res.send({ ok: false });

    imovel.nome = nome;
    imovel.descricao = descricao;
    imovel.endereco = endereco;
    imovel.valor = valor;

    await imovel.save();

    return res.send({ ok: true });
  },
  async delete(req, res) {
    const { id } = req.params;

    const imovel = await Imovel.findById({ _id: id });

    if (!imovel) return res.send({ ok: false });

    await Imovel.deleteOne({ _id: id });

    return res.send({ ok: true });
  }
};
