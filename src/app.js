

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
app.mount('#app')