import { Link } from 'react-router-dom'
import ListaDeContatos from '../../components/ListaDeContatos'

const Home = () => (
  <>
    <Link to="/Cadastro">Adicionar novo contato</Link>
    <ListaDeContatos />
  </>
)

export default Home
