<template>
  <div>
    <div @click="goToDetail()">
      <h2>{{ model.name }}</h2>
      <div v-if="model.logo">
        <img :src="model.logo" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    model: Object,
    routeParams: Object
  },
  methods: {
    goToDetail() {
      this.$router.push({name: "detail", params: {
        teamId: this.model.id,
        season: this.routeParams.season,
        leagueId: this.routeParams.league
      }})
    }
  },
};
</script>
