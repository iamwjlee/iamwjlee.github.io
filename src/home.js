

export default {
    name: 'home',
    template: 
    `
    <div>
    <h3> This component is {{componentName}} </h3>
    </div>
    `,
    data() {
        return {
            counter : 0,
            componentName: 'home',
        }
    },
    components: {
    },
    computed: {

    },
    methods: {
        test() {
            this.counter += 1;
        }
    }

}