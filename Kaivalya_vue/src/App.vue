<template>
  <div id="app">
    <h1>Recipe Book</h1>
    <SearchBar :recipes="recipes" @select="selectRecipe" />
    <RecipeList :recipe="selectedRecipe" />
  </div>
</template>

<!-- Add updated styles to App.vue -->
<style scoped>
#app {
  font-family: "Roboto", sans-serif;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f1f3f5;
}

h1 {
  margin-bottom: 2rem;
  color: #4a4a4a;
}
</style>



<script>
import SearchBar from './components/SearchBar.vue';
import RecipeList from './components/RecipeList.vue';

export default {
  name: 'App',
  components: {
    SearchBar,
    RecipeList,
  },
  data() {
    return {
      recipes: [],
      selectedRecipe: null,
    };
  },
  async created() {
    await this.fetchRecipes();
  },
  methods: {
    async fetchRecipes() {
      const apiUrl = 'https://kaivalya-node.onrender.com/api';

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        this.recipes = data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    selectRecipe(recipe) {
      this.selectedRecipe = recipe;
    },
  },
};
</script>
