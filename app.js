let id = 1;
const app = {
    data(){
        return{
            title:'Выберите категорию спорта',
            text: '',
            game:'',
            Football: [
                { name: 'Mbappe' },
                { name: 'Neymar' },
                { name: 'Leo' },
            ],
            Basketball: [
                { name: 'Travis' },
                { name: 'Bob' },
                { name: 'William' },
            ],
            Volleyball: [
                { name: 'James' },
                { name: 'Lucas' },
                { name: 'Benjamin' },
            ],

        }
    },
    methods:{
        addPlayer() {
            if(this.game == 'Football' && this.text.length > 1) {
                this.Football.push({
                    name: this.text
                })
            } else if(this.game == 'Basketball' && this.text.length > 1) {
                this.Basketball.push({
                    name: this.text
                })     
            } else if(this.game == 'Volleyball' && this.text.length > 1) {
                this.Volleyball.push({
                    name: this.text
                })
            }
            this.text = ''
            this.game = ''
        },
    }
}
Vue.createApp(app).mount('#app')