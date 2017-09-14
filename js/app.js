apiURL = 'http://dev-d8-vue-wnl.pantheonsite.io/movie/api';

new Vue({
	el: '#app',
	data: {
		message: 'hello d'
	}
	
});

new Vue({
	el: '#app2',
	data: {
		message: 'text hover'
	}
});

new Vue({ 
  el: '#app3',
  data: {
	  seen: false
  }
});

new Vue({
	el: '#app4',
	data: {
	  todos: [
	    { text: 'Learn javascript' },
		{ text: 'Learn Vue' },
		{ text: 'Do something awesome' }
	  ]
	}
});

new Vue({
	el: '#app5',
	data: {
		message: 'Hello VueJs'
	},
	methods: {
	  reverseMessage: function() {
		this.message = this.message.split('').reverse().join('')
	  }
	}
});

new Vue({
	el: '#app6',
	data: {
		message: 'hello messgae'
	}
});

Vue.component('todo-item', {
	props:['todo'],
	template: '<li>{{ todo.text }}</li>'
});

new Vue({
	el: '#app7',
	data: {
		groceryList: [
		    { id: 0, text: 'Tomato'},
			{ id: 1, text: 'Paste'},
			{ id: 2, text: 'Pants'}
		]
	}
});


new Vue({
	el: '#app8',
	data: {
		message: 'hello',
		movies: [],
		todos: []
	},
	mounted: function() {
		this.$nextTick(function() {
			this.getMovie();
		})
	},
	methods: {
		getMovie: function() {
			var self = this;
			var arr=[
                        { text: 'Learn JavaScript' },
                        { text: 'Learn Vue' },
                        { text: 'Build something awesome' }
                    ];
            this.todos = arr;
			axios.get(apiURL)
			  .then(response => {
				console.log(response);
				console.log(this);
				console.log(self);
				console.log(response.data);
				self.movies = response.data;
			  })
			  .catch(function (error) {
				console.log(error);
			  });
		}
	}
})
