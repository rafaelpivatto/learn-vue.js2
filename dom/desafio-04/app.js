new Vue({
	el: '#desafio',
	data: {
		efeito: 'destaque',
		classeA: 'classeA',
		classeB: 'classeB',
		classeUsuario: '',
		classeUsuario2: '',
		valorUsuario: '',
		estiloUsuario: '',
		loaderSize: '0%',
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.efeito = this.efeito === 'destaque' ? 'encolher' : 'destaque'
			}, 1000);
		},
		iniciarProgresso() {
			var valor = 0;
			var myLoader = setInterval(() => {
				valor += 5;
				this.loaderSize = `${valor}%`;
				if (valor === 100) {
					clearInterval(myLoader);
				}
			}, 100);
		}
	},
})
