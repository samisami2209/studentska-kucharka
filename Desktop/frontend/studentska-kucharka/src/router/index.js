import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    {
      path: '/recepty',
      name: 'recipes',
      component: () => import('../views/RecipesView.vue'),
    },
    {
      path: '/recepty/:id',
      name: 'recipe-detail',
      component: () => import('../views/RecipeDetailView.vue'),
    },
    {
      path: '/oblubene',
      name: 'favorites',
      component: () => import('../views/FavoritesView.vue'),
    },
    {
      path: '/pridat',
      name: 'add-recipe',
      component: () => import('../views/AddRecipeView.vue'),
    },
  ],
})

export default router