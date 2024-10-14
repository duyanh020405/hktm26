import Dashbroad from '@/views/Dashbroad.vue';
import { createRouter, createWebHistory } from 'vue-router'; 
import Manager_Product from '@/views/Manager_Product.vue';
import Manager_User from '@/views/Manager_User.vue';
import AddUser from '@/views/AddUser.vue';
import EditUser from '@/views/EditUser.vue';
const routes = [
  {
    path: '/admin',
    name: 'admin',
    component: import(/*name : dashbroad */'@/views/Dashbroad.vue'),

  },
  {
        path: '/admin/manager-user',
        name: 'manager-user',
        component: import(/*name : user-manager */'@/views/Manager_User.vue'),
        },
    {
        path: '/admin/manager-product',
        name: 'manager-product',
        component: import(/*name : product-manager */'@/views/Manager_Product.vue'),
    },
    {
       path: '/admin/manager-user/edit/:id',
       name: 'edit-user',
       component: import(/*name : edit */'@/views/EditUser.vue'),
    },
    {
       path: '/admin/manager-user/add-user',
       name: 'add-user',
       component: import(/*name : edit */'@/views/AddUser.vue'),
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
