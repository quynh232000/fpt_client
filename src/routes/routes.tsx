

import AppLayout from "../layouts/AppLayout";
import Cart from "../pages/Cart";
import Collection from "../pages/Collection";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
const publicRoutes = [
    {
        layout:AppLayout,
        routes:[
            {
                path: '/',
                component:Home
            },
            {
                path: '/detail',
                component:Detail
            },
            {
                path: '/collection',
                component:Collection
            },
            {
                path: '/cart',
                component:Cart
            },
           
        ]
    },
    
] 
const privateRoutes =[
    {
        layout:AppLayout,
        routes:[
            {
                path: '/admin',
                component:Home
            },
        
        ]
    },
   
   
]
export { publicRoutes ,privateRoutes } ;