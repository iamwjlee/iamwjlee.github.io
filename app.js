// const Foo = { template:'<div>foo--</div>'}
// const routes =[
//     {path: '/foo',component: Foo},
// ]

// import {createApp,ref} from 'vue'
// createApp({
//     setup() {
//         const message=ref('Hello Vue!')
//         return {
//             message
//         }
//     }
// }).mount('#app')


/*
    Vue CDN usage(global build,Options Api)
*/
// const {createApp} = Vue


// createApp({
//     data() {
//         return {
//             message: 'Hello Vue!',
//             firstName: 'John',
//             lastName: 'Doe',
//             email: 'john@gmail.com',
//             gender:'male',
//             picture:'https://randomuser.me/api/portraits/men/10.jpg',
//         }
//     },
//     methods: {
//         getUser() {
//             //console.log(this.firstName)
//             this.firstName='John2'
//             this.lastName= 'Doe2'
//             this.email= 'john2@gmail.com'
//             this.gender='male'
//             this.picture='https://randomuser.me/api/portraits/men/10.jpg'

            
//         }
//     },
// }).mount('#app')


/*
    Vue CDN usage(global build,Compositon Api)
*/
// const { createApp, ref } = Vue

/*
    Vue CDN usage(import Map,Compositon Api)
*/
/*
https://vuejs.org/guide/quick-start.html
Splitting Up the Modules
*/

// route components
const Home = { template: '<div><h1>Home</h1><p>This is home page</p></div>' }

// define routes
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
]

// router instance and pass the `routes` option
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})


import { createApp,ref} from  'vue'
// import {ButtonCounter}  from './ButtonCounter.js'
import MyComponent from './my-component.js'

const app=createApp({
  setup() {
    // const message = ref('Hello Vue Composition Api!')
    const message = ref('Hello Vue Import Map + C Api!')
    return {
      message,
    }
  }
})
app.use(router)
app.mount('#app')
// createApp(MyComponent).mount('#app')
