

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
            const res=await fetch('https://iamwjlee.github.io/res/wj.json')
            const data= await res.json()
            console.log(data)
        }
    },
})
app.mount('#app')