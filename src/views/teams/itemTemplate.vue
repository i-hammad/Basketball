<template>
  <div>
    <b-card @click="goToDetail()" no-body class="overflow-hidden" style="max-width: 540px">
      <b-row no-gutters class="align-items-center">
        <b-col class="col-auto">
          <div class="img-cntr" v-if="model.logo">
            <b-card-img :src="model.logo" alt="Image" class="rounded-0"></b-card-img>
          </div>
        </b-col>
        <b-col class="col">
          <b-card-body :title="model.name"> </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <!-- <div >
      <h2>{{ model.name }}</h2>
      <div v-if="model.logo">
        <img :src="model.logo" alt="" />
      </div>
    </div> -->
  </div>
</template>
<script>
import { teams as teamsStoreKeys } from "../../store/keys";
import { mapGetters } from "vuex";
export default {
  props: {
    model: Object,
    routeParams: null,
  },
  computed: {
     ...mapGetters(teamsStoreKeys.namespace, teamsStoreKeys.getters),
  },
  methods: {
    goToDetail() {
      this.$router.push({
        name: "detail",
        params: {
          teamId: this.model.id,
          season: this.routeParams.season || this.getSelectedSeason,
          leagueId: this.routeParams.league || this.getSelectedLeague,
        },
      });
    },
  },
};
</script>
<style scoped>
.card {
  padding: 10px;
  margin-top: 30px;
  cursor: pointer;
}
.card:hover {
  box-shadow: #00000040 4px 7px 20px;
}
.card .img-cntr {
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
}
.card .img-cntr img {
  height: 90px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.card h4 {
  font-size: 20px;
  margin-bottom: 0;
}
</style>
