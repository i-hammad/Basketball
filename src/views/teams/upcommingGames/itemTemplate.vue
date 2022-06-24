<template>
  <div>
    <div class="home">
      <h2>Home</h2>
      <span>{{ model.home.name }}</span>
      <img :src="model.home.logo" alt="" />
    </div>
    <div class="away">
      <h2>Away</h2>
      <span>{{ model.away.name }}</span>
      <img :src="model.away.logo" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["model"],
};
</script>
