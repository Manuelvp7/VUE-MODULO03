Vue.createApp({
    data() {
        return {
            tasks: [],
            newTask: '',
            showTasks: true,

        };
    },

    computed: {
        toggleButtonCaption() {
            return this.showTasks ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.newTask);
        },
        toggleTaskList() {
            this.showTasks = !this.showTasks;
        }
    },
}).mount("#assignment");