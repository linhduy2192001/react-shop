import { lazy } from "react"
import { path } from "./config/path"
import MainLayout from "./layouts/MainLayout"
import ProfileLayout from "./layouts/ProfileLayout"
import Page404 from "./pages/404"
import Profile from "./pages/account"

const Home = lazy(() => import('./pages/index'))
const Shop = lazy(() => import('./pages/shop'))
const Auth = lazy(() => import('./pages/auth'))
const Wishlist = lazy(() => import('./pages/account/wishlist'))

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
            path:path.Account.Profile, element: <ProfileLayout/>,
            children:[
                {
                    index:true, element:<Profile/> 
                },
                {
                    path:path.Account.Wishlist, element: <Wishlist/>
                }
            ]
        },
        {
            path:'*', element: <Page404/>
        }
    ]
}
]
export default routers