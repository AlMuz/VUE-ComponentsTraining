Vue.component('card', {
  props: ['title', 'content'],
  template: `
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">{{ title }}</h3>
        <div class="card-text">
          {{ content }}
        </div>
        <button @click="deleteArticle" class="btn btn-danger btn-sm">Delete me</button>
      </div>
    </div>
  `,
  methods: {
    deleteArticle() {
      this.$emit('delete-article', this.title);
    }
  }
})


new Vue({
  el: '#app',

  data: {
    articles: [{
      title: 'Simple title 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    }, {
      title: 'Simple title 2',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    }, {
      title: 'Simple title 3',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    }, {
      title: 'Simple title 4',
      content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }
    ]
  },
  methods: {
    removeArticle(event) {
      this.articles = this.articles.filter( article => article.title != event)
    }
  }

});
