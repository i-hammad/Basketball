<template>
  <div>
    <h2>Team Stats</h2>
    <loader :id="loaderId"></loader>
    <div v-if="Object.keys(getAllStats).length">
      <h2>{{ getAllStats.team.name }}</h2>
      <img :src="getAllStats.team.logo" alt="" />
      <h2>{{ getAllStats.country.name }}</h2>
      <img :src="getAllStats.country.flag" alt="" />
      <h2>{{ getAllStats.league.name }}</h2>
      <h2>{{ getAllStats.league.season }}</h2>
      <img :src="getAllStats.league.logo" alt="" />
      <div class="chart">
        <pie-chart :chart-data="this.getTeamStats.chartData" :options="this.getTeamStats.chartOptions" />
      </div>
      <div class="chart">
        <bar-chart :chart-data="this.getTotalGamesPlayed.chartData" :options="this.getTotalGamesPlayed.chartOptions" />
      </div>
    </div>
    <div v-else>
      <span>no Record found</span>
    </div>
    <div>
      <h2>Upcomming games</h2>
      <div v-if="getAllUpcommingGames.length">
        <div v-for="(game, index) in getAllUpcommingGames" :key="index">
          {{ game.teams }}
        </div>
      </div>
      <div v-else>
        <span>no Record found</span>
      </div>
    </div>
  </div>
</template>
<script>
import { teams as teamsStoreKeys } from "../../store/keys";
import { mapGetters, mapActions } from "vuex";
import pieChart from "../../components/chart/pieChart";
import barChart from "../../components/chart/barChart";
export default {
  components: {
    pieChart,
    barChart,
  },
  data() {
    return {
      loaderId: "teamStatsLoaderId",
    };
  },
  mounted() {
    if (this.$route.params) {
        this.getStatistics();
    }
  },
  computed: {
    ...mapGetters(teamsStoreKeys.namespace, teamsStoreKeys.getters),
  },
  methods: {
    ...mapActions(teamsStoreKeys.namespace, teamsStoreKeys.actions),
    getStatistics() {
      this.get_Statistics({
        data: {
          season: this.$route.params.season,
          league: this.$route.params.leagueId,
          team: this.$route.params.teamId,
        },
        config: {
          loader: {
            show: true,
            id: this.loaderId,
          },
        },
      })
        .then(() => {
          this.getUpcommingGames();
        })
        .catch((err) => {
          this.$alert.fire({
            icon: "error",
            title: `${err}`,
          });
        });
    },
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
        .then(() => {})
        .catch((err) => {
          this.$alert.fire({
            icon: "error",
            title: `${err}`,
          });
        });
    },
  },
};
</script>
