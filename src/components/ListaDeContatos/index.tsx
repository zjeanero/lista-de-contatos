import type { RootState } from "../../store"
import { useSelector, useDispatch } from "react-redux"
import { remover } from "../../store/reducers/Contatos"
import { Card, Botao, Campo, CampoContato } from "./style";


const ListaDeContatos = () => {
  const dispatch = useDispatch()
  const contatos = useSelector((state: RootState) => state.contatos)


  return  (
  <Campo>
    {contatos.map((contato) => (
    <Card key={contato.id}>
      <CampoContato>Nome: {contato.nomeCompleto}</CampoContato>
      <CampoContato>Email: {contato.email}</CampoContato>
      <CampoContato>Telefone: {contato.telefone}</CampoContato>
      <Botao $perigo type="button" onClick={() => dispatch(remover(contato.id))}>
        Remover
      </Botao>
      <Botao as="a" href={`/editar/${contato.id}`}>
        Editar
      </Botao>
    </Card>
  ))}
</Campo>
  )
}

export default ListaDeContatos
