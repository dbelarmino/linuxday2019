import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form } from 'react-bootstrap';
import { StyleCadastro } from './style';
import api from '../../services/api';

class Cadastro extends Component{
  constructor(props){
    super(props);
    this.state ={ id: props.match.params.id || "",
                  nome: "",
                  descricao: "",
                  endereco: "",
                  valor: "",
                  erro: false,
                };
  }

  componentDidMount() {
    const { id } = this.state;
    if(id !== "")
      this.findOne(this.state.id);
  }

  async findOne(id) {
    await api.get(`imovel/${id}`)
      .then(response => {
        const { imovel } = response.data;
        if(imovel){
          this.setState({ nome: response.data.imovel.nome,
            descricao: response.data.imovel.descricao,
            endereco: response.data.imovel.endereco,
            valor: response.data.imovel.valor,
          });
        }
        else{
          this.setState({ erro: true });
        }
      })
      .catch(() => {
        this.setState({ erro: true });
      });
  }


  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { id } = this.state;
    const dados = {
      nome: this.state.nome,
      descricao: this.state.descricao,
      endereco: this.state.endereco,
      valor: this.state.valor
    }
    if(id !== ""){

      const imovel = await api.put(`imovel/${id}`, dados);
      const ok = imovel.data;
      if(ok) this.props.history.push("/");
    }
    else{
      const imovel = await api.post("imovel", dados);
      const ok = imovel.data;
      if(ok) this.props.history.push("/");
    }
  }

  render(){
    const { erro } = this.state;
    return(
      <StyleCadastro>
        <Container>
          { erro === false ? (
            <div>
              <h2>Cadastro de Imóvel</h2>
              <Form autoComplete="off" onSubmit={this.handleSubmit}>
                <Form.Group controlId="nome">
                  <Form.Control type="text" placeholder="Nome" name="nome" value={this.state.nome}
                                onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="descricao">
                  <Form.Control type="text" placeholder="Descrição" name="descricao" value={this.state.descricao}
                                onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="endereco">
                  <Form.Control type="text" placeholder="Endereço" name="endereco" value={this.state.endereco}
                                onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="Valor">
                  <Form.Control type="number" placeholder="Valor" name="valor" value={this.state.valor}
                                onChange={this.handleChange} />
                </Form.Group>

                <button className="btn" type="submit">Salvar</button>
                <Link className="btn" to="/">Voltar</Link>
              </Form>
            </div>

          ) : (
            <h4>Erro ao buscar os dados!</h4>
          ) }

        </Container>
      </StyleCadastro>
    );
  }
}

export default Cadastro;
