import { useRoutes } from 'react-router-dom'
import routers from './routers'
import 'antd/dist/antd.css';

function App() {
  const element=useRoutes(routers)
  return (
    <>
      {element}
    </>
  )
}

export default App
