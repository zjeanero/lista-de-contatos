import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adicionar, editar } from '../../store/reducers/Contatos'
import { useParams, useNavigate } from 'react-router-dom'
import type { RootState } from '../../store'


const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()

// useSelector para pegar a lista inteira
const contatos = useSelector((state: RootState) => state.contatos)

//.find() para encontrar o contato do gustavo específico pelo id
const contato = contatos.find((c) => c.id === Number(id))
useEffect(() => {
  if (contato) {
    setNome(contato.nomeCompleto)
    setEmail(contato.email)
    setTelefone(contato.telefone)
  }
}, [contato])

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const cadastrarContato = (evento: React.FormEvent) => {
    evento.preventDefault()

  if (id) {
    const contatoAtualizado = {
      id: Number(id),
      nomeCompleto: nome,
      email,
      telefone
    }
    dispatch(editar(contatoAtualizado))
  } else {
    const novoContato = {
      id: new Date().getTime(),
      nomeCompleto: nome,
      email: email,
      telefone: telefone
    }
    dispatch(adicionar(novoContato))
  }
  navigate('/')
}

  return (
    <form onSubmit={cadastrarContato}>
      <h2>Formulário de Contato</h2>
      <input value={nome} onChange={evento => setNome(evento.target.value)} type="text" placeholder="Nome completo" />
      <input value={email} onChange={evento => setEmail(evento.target.value)} type="email" placeholder="E-mail" />
      <input value={telefone} onChange={evento => setTelefone(evento.target.value)} type="tel" placeholder="Telefone" />
      <button type="submit">Cadastrar</button>
    </form>
  )
}

export default Formulario
