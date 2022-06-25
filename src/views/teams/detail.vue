<template>
  <div>
    <loader :id="loaderId"></loader>
    <div v-if="Object.keys(getAllStats).length">
      <div class="row">
        <div class="col-md-6">
          <b-card no-body class="overflow-hidden" style="max-width: 540px">
            <b-row>
              <b-col md="auto">
                <div class="img-cntr" v-if="getAllStats.team.logo">
                  <b-card-img :src="getAllStats.team.logo" alt="Image" class="rounded-0"></b-card-img>
                </div>
              </b-col>
              <b-col class="col">
                <small>{{ getAllStats.league.season }}</small>
                <h4>{{ getAllStats.team.name }}</h4>
                <div class="row align-items-center">
                  <div class="col-auto">
                    <img class="flag" :src="getAllStats.country.flag" alt="" />
                  </div>
                  <div class="col" style="padding: 0">
                    <p style="margin: 0">{{ getAllStats.country.name }}</p>
                  </div>
                </div>
              </b-col>
              <b-col class="col-auto">
                <div class="row">
                  <div class="col text-center">
                    <b-card-img style="width: 35px" :src="getAllStats.league.logo" alt="Image" class="rounded-0"></b-card-img>
                  </div>
                </div>
                <div class="row">
                  <div class="col text-center">
                    <small>{{ getAllStats.league.name }}</small>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-card>
        </div>
        <div class="col-md-3 points" v-if="getPointsAgainst">
          <b-card no-body class="overflow-hidden" style="max-width: 540px; height: 100%">
            <b-row>
              <b-col md="">
                <h5>Against</h5>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <h4>{{ getPointsAgainst.home }}</h4>
                <small>Home</small>
              </b-col>
              <b-col>
                <h4>{{ getPointsAgainst.away }}</h4>
                <small>Away</small>
              </b-col>
              <b-col md="auto"> </b-col>
            </b-row>
          </b-card>
        </div>
        <div class="col-md-3 points" v-if="getPointsFor">
          <b-card no-body class="overflow-hidden" style="max-width: 540px; height: 100%">
            <b-row>
              <b-col md="">
                <h5>For</h5>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <h4>{{ getPointsFor.home }}</h4>
                <small>Home</small>
              </b-col>
              <b-col>
                <h4>{{ getPointsFor.away }}</h4>
                <small>Away</small>
              </b-col>
              <b-col md="auto"> </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-md-6">
          <b-card no-body class="overflow-hidden" style="max-width: 540px">
            <b-row>
              <b-col md="">
                <h5>Results</h5>
              </b-col>
            </b-row>
            <b-row>
              <b-col md=""><pie-chart :chart-data="this.getTeamStats.chartData" :options="this.getTeamStats.chartOptions" /></b-col>
            </b-row>
          </b-card>
        </div>
        <div class="col-md-6">
          <b-card no-body class="overflow-hidden" style="max-width: 540px">
            <b-row>
              <b-col md="">
                <h5>Games Played</h5>
              </b-col>
            </b-row>
            <b-row>
              <b-col md=""> <bar-chart :chart-data="this.getTotalGamesPlayed.chartData" :options="this.getTotalGamesPlayed.chartOptions" /></b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>
    <div v-else-if="showNoRecordFound">
      <span>no Record found</span>
    </div>
    <upcomming-games />

    <!-- <h2>Team Stats</h2>
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
      <div v-if="getPointsAgainst" class="against">
        <h1>Against</h1>
        <h2>Home</h2>
        <span>{{ getPointsAgainst.home }}</span>
        <h2>Away</h2>
        <span>{{ getPointsAgainst.away }}</span>
      </div>
      <div v-if="getPointsFor" class="far">
        <h1>For</h1>
        <h2>Home</h2>
        <span>{{ getPointsFor.home }}</span>
        <h2>Away</h2>
        <span>{{ getPointsFor.away }}</span>
      </div>
    </div>
    <div v-else-if="showNoRecordFound">
      <span>no Record found</span>
    </div>
    <div>
    </div> -->
  </div>
</template>
<script>
import { teams as teamsStoreKeys } from "../../store/keys";
import { mapGetters, mapActions } from "vuex";
import pieChart from "../../components/chart/pieChart";
import barChart from "../../components/chart/barChart";
import upcommingGames from "./upcommingGames/index";
export default {
  components: {
    pieChart,
    barChart,
    upcommingGames,
  },
  data() {
    return {
      loaderId: "teamStatsLoaderId",
      showNoRecordFound: false,
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
          this.showNoRecordFound = true;
          // this.getUpcommingGames();
        })
        .catch((err) => {
          this.showNoRecordFound = true;
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
<style scoped>
.card {
  max-width: unset !important;
  text-align: left;
  padding: 15px;
}
.card .img-cntr img {
  height: 95px;
}
.card .flag {
  width: 24px;
}
.points h4 {
  margin-bottom: 0;
  font-weight: 700;
  margin-top: 10px;
}
@media only screen and (max-width: 767px) {
  .card .img-cntr img {
    height: auto;
    margin-bottom: 30px;
  }
}
</style>
