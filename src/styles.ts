import { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from './variaveis'


const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${variaveis.cinza};
    display: flex;
    align-items: center; /* alinha verticalmente */
    justify-content: center; /* alinha horizontalmente */
  }
`
export const BotaoLink = styled(Link)`
  background-color: ${variaveis.verde};
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${variaveis.cinzaEscuro};
  `

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
`

export const Titulo = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin: 20px;
  text-align: center;
`

export default EstiloGlobal
