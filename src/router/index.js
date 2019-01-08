import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/'
import Item from '@/page/item'
import Score from '@/page/score'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'item',
      component: Item
    },
    {
      path: '/',
      name: 'score',
      component: Score
    }
  ]
})
// import App from '../App'

// export default [{
//   path:'/',
//   component: App,
//   children:[{
//       path:'',
//       component:r => require.ensure([], ()=> r(require('../page/home')),'home')
//   },{
//       path:'/item',
//       component: r => require.ensure([], () => r(require('../page/item')), 'item')
//     }, {
//       path: '/score',
//       component: r => require.ensure([], () => r(require('../page/score')), 'score')
//     }
// ]
// }]