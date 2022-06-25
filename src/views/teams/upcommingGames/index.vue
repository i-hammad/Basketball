<template>
  <div>
      <div class="row">
        <div class="col text-center">
          <h2>Upcomming Games</h2>
        </div>
      </div>
      <div v-if="getAllUpcommingGames.length" class="row">
        <div class="col-md-6">
          <h5>Home</h5>
          <div v-for="(game, index) in getAllUpcommingGames" :key="index">
            <item-template :model="game.home"></item-template>
          </div>
        </div>
        <div class="col-md-6">
          <h5>Away</h5>
          <div v-for="(game, index) in getAllUpcommingGames" :key="index">
            <item-template :model="game.away"></item-template>
          </div>
        </div>
      </div>
    <div v-else-if="showNoRecordFound">
        <span>no Record found</span>
      </div>
    <!-- <div>
      <h2>Upcomming games</h2>
      <div v-if="getAllUpcommingGames.length"></div>
      <div v-else-if="showNoRecordFound">
        <span>no Record found</span>
      </div>
    </div> -->
  </div>
</template>
<script>
import { teams as teamsStoreKeys } from "../../../store/keys";
import { mapGetters, mapActions } from "vuex";
import itemTemplate from "./itemTemplate";
export default {
  components: {
    itemTemplate,
  },
  data() {
    return {
      showNoRecordFound: false,
    };
  },
  mounted() {
    if (this.$route.params) {
      this.getUpcommingGames();
    }
  },
  computed: {
    ...mapGetters(teamsStoreKeys.namespace, teamsStoreKeys.getters),
  },
  methods: {
    ...mapActions(teamsStoreKeys.namespace, teamsStoreKeys.actions),
    getUpcommingGames() {
      this.get_UpcommingGames({
        data: {
          season: this.$route.params.season,
          team: this.$route.params.teamId,
        },
        config: {
          loader: {
            show: true,
          },
        },
      })
        .then(() => {
          this.showNoRecordFound = true;
        })
        .catch((err) => {
          this.showNoRecordFound = false;
          this.$alert.fire({
            icon: "error",
            title: `${err}`,
          });
        });
    },
  },
};
</script>
