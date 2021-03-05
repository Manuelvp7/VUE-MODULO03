const app = Vue.createApp({
    data() {

        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
        },
        removeGoal(idx) {
            console.log('slicing');
            this.goals.splice(idx, 1);
        }
    },
});

app.mount('#user-goals');