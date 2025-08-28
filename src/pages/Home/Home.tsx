import ListaDeContatos from '../../components/ListaDeContatos'
import { BotaoLink, Container, Titulo } from '../../styles'

const Home = () => (
  <>
  <Titulo>Lista de Contatos</Titulo>
  <Container>
    <BotaoLink to="/Cadastro">Adicionar novo contato</BotaoLink>
    <ListaDeContatos />
  </Container>
  </>
)

export default Home
