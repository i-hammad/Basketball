<template>
  <div>
    <loader :id="loaderId"></loader>
    <form class="form-container" @submit.prevent="submit">
      <div class="sub-form-container">
        <div class="form-field-area">
          <input class="form-field" type="text" v-model="teamName" placeholder="Enter team name" />
        </div>

        <div v-if="getAllSeasons.length" class="form-field-area">
          <select class="form-field" name="seasons" id="seasons" v-model="selectedSeason" required>
            <option disabled value="">Please select one</option>
            <option v-for="(season, index) in getAllSeasons" :key="index" :value="season">{{ season }}</option>
          </select>
        </div>

        <div v-if="getAllLeagues.length" class="form-field-area">
          <select class="form-field" name="leagues" id="leagues" v-model="selectedLeague" required>
            <option disabled value="">Please select one</option>
            <option v-for="(league, index) in getAllLeagues" :key="index" :value="league.id">{{ league.name }}</option>
          </select>
        </div>
      </div>
      <button>Search</button>
    </form>
  </div>
</template>
<script>
import { teams as teamsStoreKeys, seasonFilter as seasonsStoreKeys, league as leaguesStoreKeys } from "../../store/keys";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  components: {
  },
  data() {
    return {
      model: Object,
      teamName: null,
      selectedSeason: null,
      selectedLeague: null,
      loaderId: "seasonLoaderId",
    };
  },
  mounted() {
    this.getSeasons();
    this.getLeagues();
  },
  computed: {
    ...mapGetters(teamsStoreKeys.namespace, teamsStoreKeys.getters),
    ...mapGetters(seasonsStoreKeys.namespace, seasonsStoreKeys.getters),
    ...mapGetters(leaguesStoreKeys.namespace, leaguesStoreKeys.getters),
    selectFilterVal() {
      let model = {
        search: this.teamName,
        season: this.selectedSeason,
        league: this.selectedLeague,
      };
      return model;
    },
  },
  methods: {
    ...mapActions(teamsStoreKeys.namespace, teamsStoreKeys.actions),
    ...mapActions(seasonsStoreKeys.namespace, seasonsStoreKeys.actions),
    ...mapActions(leaguesStoreKeys.namespace, leaguesStoreKeys.actions),
    getSeasons() {
      this.get_Seasons({
        config: {
          loader: {
            show: true,
            id: this.loaderId,
          },
        },
      });
    },
    getLeagues() {
      this.get_Leagues({
        config: {
          loader: {
            show: true,
            id: this.loaderId,
          },
        },
      });
    },
    submit() {
      this.$emit("onSearch", this.selectFilterVal);
    },
  },
};
</script>
