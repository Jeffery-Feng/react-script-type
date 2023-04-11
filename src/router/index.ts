
import { lazy } from "react"
interface routerInter {
    children?: Array<routerInter>
    // element?: React.ReactNode
    element?: any
    component?: any
    path?: string
    auth?: boolean
    redirect?:string
}

 const routes:routerInter[] = [
    {
        path:'/',
        redirect:'/index'
    },
    {
        path:'/index',
        component:lazy(() => import("../pages/index/index"))
    },
    // {
    //     path:'/home_marriage_test/payment/:id/:type',
    //     component:lazy(() => import("../pages/home_marriage_test/payment"))
    // },
    // {
    //     path: "*",
    //     component: lazy(() => import('../pages/error'))
    // },
]

export default routes