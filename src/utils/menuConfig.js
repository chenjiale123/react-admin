const menuList=[

    {
        title:'首页',
        icon:"home",
        path:'/'
    },
    {
        title:'商品',
        icon:"appstore",
        path:'/product',
        children:[
            {
                title:'商品',
                icon:"appstore",
                path:'/manage',
            }
        ]
    }

]
export default menuList