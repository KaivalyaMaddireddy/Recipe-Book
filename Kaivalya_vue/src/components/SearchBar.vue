<template>
  <div class="recipe-tiles">
    <div
      v-for="recipe in recipes"
      :key="recipe._id"
      class="recipe-tile"
      @click="handleSelect(recipe)"
    >
      <img :src="recipe.image_url" alt="Recipe Image" class="recipe-image" />
      <h4>{{ recipe.recipe_name }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    recipes: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleSelect(recipe) {
      this.$emit('select', recipe);
    },
  },
};
</script>

<style scoped>
.recipe-tiles {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 1rem;
}

.recipe-tile {
  flex: 0 0 auto;
  width: 120px;
  height: auto;
  background-color: #f8f9fa;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  color: #333;
}

.recipe-tile:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  background-color: #e9ecef;
}

.recipe-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  border-radius: 5px;
  margin-bottom: 0.5rem;
}
</style>
