export default {
    props: ['title'],
    name: 'my-component1',
    template: 
    `
    <div>
    This is the component with name {{title}} {{componentName}} 
    </div>
    `,
    data() {
        return {
            componentName: 'MyComponent',
        }
    },
    components: {
    },
    methods: {
    }

}