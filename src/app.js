
// route components
// 1. 라우트 컴포넌트를 정의하세요.
// 아래 내용들은 다른 파일로부터 가져올 수 있습니다
const Home = { template: `<div><h1>Home  </h1><p>This is home page</p></div>`}


// define routes
const routes = [
    { path: '/', component: Home2 },
    { path: '/about', component: About },
    { path: '/contact', component: Contact2 },
]
// router instance and pass the `routes` option
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})
    
import Contact2 from './about.js'
import Home2 from './home.js'


import Mycomp from './mycomp.js'
// https://www.youtube.com/watch?v=qZXt1Aom3Cs
const app=Vue.createApp({
    // template: '<h1> Hello World</h1>',
    data() {
        return {
            firstName: 'John', 
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender:'male',
            picture:'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    components: {
        Mycomp
    },
    methods: {
        getUser() {
            //console.log(this.firstName)
            this.firstName='John2'
            this.lastName= 'Doe2'
            this.email= 'john2@gmail.com'
            this.gender='female'
            this.picture='https://randomuser.me/api/portraits/men/10.jpg'

            
        },
        async test() {
            /*
            Javascript Fetch Api to make asynchronous HTTP requests
            네트워크의 리소스를 쉽게 비동기적으로 취득할 수 있다
            it is a great alternative to XMLHttpRequest 
            */
            const res=await fetch('https://iamwjlee.github.io/res/wj.json')
            console.log(res.status)
            console.log(res.statusText)
            if(res.status===200) {
                const jsonData= await res. json()
                console.log('배열의 갯수=', jsonData.length)
                console.log(jsonData)
            }
            else {
                console.log('Not Okay=', res.status)

            }
        }
    },
})
app.use(router)
app.mount('#app')