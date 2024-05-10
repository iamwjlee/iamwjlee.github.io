

// https://www.youtube.com/watch?v=qZXt1Aom3Cs
const app=Vue.createApp({
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
            this.gender='male'
            this.picture='https://randomuser.me/api/portraits/men/10.jpg'

            
        }
    },
})
app.mount('#app')