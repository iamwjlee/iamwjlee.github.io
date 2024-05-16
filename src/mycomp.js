export default {
    props: ['title'],
    name: 'my-component1',
    template: 
    `
    <div>
    {{componentName}} with para is {{title}} 
    </div>
    `,
    data() {
        return {
            componentName: 'TestComponent',
        }
    },
    components: {
    },
    methods: {
    }

}