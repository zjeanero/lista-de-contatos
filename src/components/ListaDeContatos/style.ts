import styled from "styled-components";
import variaveis from "../../variaveis";

export const Campo = styled.ul`
  padding-top: 24px;
`

export const Card = styled.li`
  background-color: ${variaveis.branco};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

`

export const Botao = styled.button<{ $perigo?: boolean}>`
  font-weight: bold;
  font-size: 12px;
  color: ${variaveis.branco};
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.$perigo ? `${variaveis.vermelho}` : `${variaveis.cinzaEscuro}`)};
  border-radius: 8px;
  margin-right: 8px;
`

export const CampoContato = styled.div`
  background-color: #fff;
  padding: 8px;
  border-radius: 8px;
  margin-bottom: 8px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
`
