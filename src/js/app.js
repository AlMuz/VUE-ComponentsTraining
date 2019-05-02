Vue.component('card', {
  props: ['title', 'content'],
  template: `
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">{{ title }}</h3>
        <div class="card-text">
          {{ content }}
        </div>
      </div>
    </div>
  `
})


new Vue({
  el: '#app',

  data: {

  },

});
