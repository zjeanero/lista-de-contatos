import type { RootState } from "../../store"
import { useSelector, useDispatch } from "react-redux"
import { remover } from "../../store/reducers/Contatos"
import { Link } from 'react-router-dom';
import { Card } from "./style";


const ListaDeContatos = () => {
  const dispatch = useDispatch()
  const contatos = useSelector((state: RootState) => state.contatos)


  return  (
    <ul>
      {contatos.map((contato) => (
        <Card key={contato.id}>
          Nome: {contato.nomeCompleto} <br />
          Email: {contato.email} <br />
          Telefone: {contato.telefone} <br />
          <button type="button" onClick={() => dispatch(remover(contato.id))} >Remover</button>
          <Link to={`/editar/${contato.id}`}>Editar</Link>
        </Card>
      ))}
    </ul>
  )
}

export default ListaDeContatos
