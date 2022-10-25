import { lazy } from "react"
import { path } from "./config/path"
import MainLayout from "./layouts/MainLayout"
import Page404 from "./pages/404"

const Home = lazy(() => import('./pages/index'))
const Shop = lazy(() => import('./pages/shop'))
const Auth = lazy(() => import('./pages/auth'))

const routers = [
    {
    element: <MainLayout/>,
    path:'/',
    children:[
        {
            index:true, element: <Home/>
        },
        {
            path:path.Shop, element: <Shop/>
        },
        {
            path:path.Auth, element:<Auth/>
        },
        {
            path:'*', element: <Page404/>
        }
    ]
}
]
export default routers