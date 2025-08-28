import styled from "styled-components";
import variaveis from "../../variaveis";

export const Titulo = styled.h2`
  text-align: center;
  padding: 16px;
  font-size: 32px;
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 8px;
  align-items: end;
  margin-bottom: 16px;
`

export const Campo = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
`

export const BotaoSalvar = styled.button`
  background-color: ${variaveis.verde};
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin-top: 12px;
  margin-right: 12px;
`
