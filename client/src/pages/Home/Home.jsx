import TableAutos from '../../components/TableAutos/TableAutos.component.jsx'
import TableServicio from '../../components/TableServicio/TableServicio.component.jsx'
import PostAuto from '../PostAuto/PostAuto.jsx'
const Home = () => {

  return (
    <div>
      <TableAutos />
      <TableServicio />
      <PostAuto />
    </div>
  )
}

export default Home
