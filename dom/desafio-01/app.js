new Vue({
  el: '#desafio',
  data: {
    name: 'Rafael',
    age: 31,
    image: 'https://hypescience.com/wp-content/uploads/2012/03/caomusic.jpg',
  },
  methods: {
    ageMultipliedBy3() {
      return this.age * 3
    },
    randomNumber() {
      return Math.random()
    }
  },
})