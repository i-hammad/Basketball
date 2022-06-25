import { servicesFactory } from "../../services/serviceFactory";
export default {
  namespaced: true,
  state: {
    teams: [],
    statistics: {},
    games: [],
    selectedLeague: null,
    selectedSeason: null,
  },
  getters: {
    getAllTeams(state) {
      return state.teams;
    },
    getAllStats(state) {
      return state.statistics;
    },
    getTeamStats(state) {
      return ChartHelper.getTeamGameStats(state.statistics.games);
    },
    getTotalGamesPlayed(state) {
      return ChartHelper.totalgamesPlayed(state.statistics.games.played);
    },
    getAllUpcommingGames(state) {
      return state.games;
    },
    getPointsAgainst(state) {
      return state.statistics.points.against.total;
    },
    getPointsFor(state) {
      return state.statistics.points.for.total;
    },
    getSelectedSeason(state) {
      return state.selectedSeason;
    },
    getSelectedLeague(state) {
      return state.selectedLeague;
    },
  },
  mutations: {
    setTeams(state, teams) {
      state.teams = teams;
    },
    setStatistics(state, statistics) {
      state.statistics = statistics;
    },
    setUpcommingGames(state, games) {
      state.games = games
        .filter((game) => game.status.long === "Not Started")
        .map((game) => {
          return game.teams;
        });
    },
    setSelectedLeague(state, league) {
      state.selectedLeague = league;
    },
    setSelectedSeason(state, season) {
      state.selectedSeason = season;
    },
    resetState(state, payload) {
      Object.assign(state, { teams: [] });
    },
  },
  actions: {
    getTeams({ commit }, param) {
      return servicesFactory
        .createService(servicesFactory.serviceType.enums.services.lmsService)
        .teamService.getTeams(param)
        .then((response) => {
          commit("setTeams", response.data.response);
        });
    },
    getStatistics({ commit }, param) {
      return servicesFactory
        .createService(servicesFactory.serviceType.enums.services.lmsService)
        .teamService.getStatistics(param)
        .then((response) => {
          commit("setStatistics", response.data.response);
        });
    },
    getUpcommingGames({ commit }, param) {
      return servicesFactory
        .createService(servicesFactory.serviceType.enums.services.lmsService)
        .teamService.getUpcommingGames(param)
        .then((response) => {
          commit("setUpcommingGames", response.data.response);
        });
    },
    selectSeason({ commit }, param) {
      commit("setSelectedSeason", param);
    },
    selectLeague({ commit }, param) {
      commit("setSelectedLeague", param);
    },
    resetNotes({ commit }) {
      return commit("resetState");
    },
  },
};

class ChartHelper {
  static getTeamGameStats(games) {
    let obj = null;
    let data = [games.wins.all.percentage, games.loses.all.percentage, games.draws.all.percentage];
    if (games) {
      obj = {
        chartData: {
          labels: ["Win", "Loss", "Draw"],
          datasets: [
            {
              backgroundColor: ["#1c4189", "#c7102d", "#c2c2c2"],
              data: data,
            },
          ],
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
        },
      };
    }

    return obj;
  }
  static totalgamesPlayed(games) {
    let obj = null;
    let data = [games.all, games.away, games.home];
    if (games) {
      obj = {
        chartData: {
          labels: ["All", "Away", "Home"],
          datasets: [
            {
              backgroundColor: ["#1c4189", "#c7102d", "#c2c2c2"],
              data: data,
            },
          ],
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
        },
      };
    }

    return obj;
  }
}
