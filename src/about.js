export default {
    // props: ['title'],
    name: 'about',
    template: 
    `
    <div>
    This component {{componentName}}  
    <br>
    <button @click="test()" >Counting</button>

    {{counter}}
    </div>
    `,
    data() {
        return {
            counter : 0,
            componentName: 'Contact2',
        }
    },
    components: {
    },
    methods: {
        test() {
            this.counter += 1;
        }
    }

}