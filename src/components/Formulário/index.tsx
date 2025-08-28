import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adicionar, editar } from '../../store/reducers/Contatos'
import { useParams, useNavigate, Form } from 'react-router-dom'
import type { RootState } from '../../store'
import { BotaoSalvar, Campo, Titulo } from './style'
import { BotaoLink } from '../../styles'


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
    console.log('MODO EDIÇÃO')
    const contatoAtualizado = {
      id: Number(id),
      nomeCompleto: nome,
      email,
      telefone
    }
    dispatch(editar(contatoAtualizado))
  } else {
    console.log('MODO ADIÇÃO')
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
    <Form onSubmit={cadastrarContato}>
      <Titulo>Formulário de Contato</Titulo>
      <Campo value={nome} onChange={evento => setNome(evento.target.value)} type="text" placeholder="Nome completo" />
      <Campo value={email} onChange={evento => setEmail(evento.target.value)} type="email" placeholder="E-mail" />
      <Campo value={telefone} onChange={evento => setTelefone(evento.target.value)} type="tel" placeholder="Telefone" />
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
        <BotaoLink to="/">Voltar</BotaoLink>
    </Form>
  )
}

export default Formulario
