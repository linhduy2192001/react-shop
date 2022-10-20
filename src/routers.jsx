import { lazy } from "react"
import { path } from "./config/path"
import MainLayout from "./layouts/MainLayout"
import Page404 from "./pages/404"

const Home = lazy(() => import('./pages/index'))

const routers = [
    {
    element: <MainLayout/>,
    path:'/',
    children:[
        {
            index:true, element: <Home/>
        },
        {
            path:'*', element: <Page404/>
        }
    ]
}
]
export default routers