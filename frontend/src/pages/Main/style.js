import styled from 'styled-components';

export const StyleMain = styled.article`
  margin-top: 120px;
  padding-bottom: 120px;

  h2{
    margin-bottom: 20px;
  }

  .btn{
    background: none;
    border: none;
    color: #007bff;
    font-size: 18px;
  }

  .btn:hover, .btn:hover{
    color: #007bff;
    text-decoration: underline;
  }

  .btn-novo{
    padding-bottom: 20px;
  }

  .btn-deletar{
    padding-left: 20px;
  }

  thead tr th{
    font-weight: bold;
    text-align: center;
  }

  tbody tr th{
    font-weight: normal;
  }

  thead tr th:nth-child(5){
    width: 190px;
  }
`;
