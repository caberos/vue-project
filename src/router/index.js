import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsersCreate from '../views/users/UsersCreate.vue'
import UsersView from '../views/users/UsersView.vue'
import UsersEdit from '../views/users/UsersEdit.vue'
import RolEdit from '../views/rols/RolEdit.vue'
import RolView from '../views/rols/RolView.vue'
import RolCreate from '../views/rols/RolCreate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },{
      path: '/users/create',
      name: 'usersCreate',
      component: UsersCreate
    },
    {
      path: '/users/edit/:id',
      name: 'usersEdit',
      component: UsersEdit
    },{
      path: '/rols',
      name: 'rols',
      component: RolView
    },{
      path: '/rol/create',
      name: 'rolCreate',
      component: RolCreate
    },
    {
      path: '/rol/edit/:id',
      name: 'rolEdit',
      component: RolEdit
    }
  ]
})

export default router
