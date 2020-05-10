import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { StyleMain } from './style';
import { Table, Container } from "react-bootstrap";
import api from "../../services/api";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { imoveis: [], erro: false};
  }

  componentDidMount() {
    this.findAll();
  }

  async findAll() {
    await api
      .get("imovel")
      .then(response => {
        this.setState({ imoveis: response.data.imovel });
      })
      .catch((error) => {
        this.setState({ erro: true})
      });
  }

  async handleDelete(id) {
    const imovel = await api.delete(`imovel/${id}`);

    if (imovel.status === 200) this.findAll();
  }

  render() {
    const  { erro, imoveis } = this.state;
    return (
      <StyleMain>
        <Container>

          { erro === false ? (
            <div>
              <h2>Manutenção de Imóveis</h2>
              <Link className="btn btn-novo" to="/cadastrar">Cadastrar</Link>

              { imoveis.length > 0 ? (

              <Table striped bordered hover size="sm">

                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Endereço</th>
                    <th>Valor</th>
                    <th>Ação</th>
                  </tr>
                </thead>

                <tbody>
                  {imoveis.map(imovel => (
                    <tr key={imovel._id}>
                      <th>{imovel.nome}</th>
                      <th>{imovel.descricao}</th>
                      <th>{imovel.endereco}</th>
                      <th>{imovel.valor}</th>
                      <th>
                        <Link className="btn" to={`/atualizar/${imovel._id}`}>Editar</Link>
                        <button className="btn btn-deletar" onClick={() => this.handleDelete(imovel._id)}>Deletar</button>
                      </th>
                    </tr>
                  ))}
                </tbody>

              </Table>
                  ) : (
                    <h4>Lista Vazia</h4>
                  )}
          </div>

          ) : (
              <h2>Falha ao buscar os dados</h2>
          )}

        </Container>
      </StyleMain>
    );
  }
}
export default Main;
