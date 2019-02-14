new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta() {
            alert('Esse é um alerta!')
        },
        armazenarValor(event) {
            this.valor = event.target.value
        },
    },
})