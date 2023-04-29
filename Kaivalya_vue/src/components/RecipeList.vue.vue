<template>
  <div>
    <div v-if="recipe">
      <h3>{{ recipe.recipe_name }}</h3>



      <p>Difficulty: {{ recipe.difficulty }}</p>
      <p>Prep Time: {{ recipe.prep_time }}</p>
      <p>Cook Time: {{ recipe.cook_time }}</p>
      <p>Serving Size: {{ recipe.serving_size }}</p>
      <h4>Ingredients:</h4>
      <ul>
        <li v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ ingredient }}</li>
      </ul>
      <h4>Instructions:</h4>
      <ol>
        <li v-for="(instruction, index) in recipe.instructions" :key="index">{{ instruction }}</li>
      </ol>
    </div>
    <p v-else>Select a recipe to view details.</p>
  </div>
</template>

<!-- Add styles to RecipeList.vue -->
<style scoped>
h3 {
  margin-bottom: 1rem;
}

h4 {
  margin: 1rem 0;
}

ul,
ol {
  list-style-position: inside;
  padding-left: 1rem;
}
</style>


<script>
export default {
  name: 'RecipeList',
  props: {
    recipe: {
      type: Object,
      default: null,
    },
  },
};
</script>
