import { servicesFactory } from "../../services/serviceFactory";
export default {
  namespaced: true,
  state: {
    leagues: [],
  },
  getters: {
    getAllLeagues(state) {
      return state.leagues;
    },
  },
  mutations: {
    setLeagues(state, leagues) {
      state.leagues = leagues;
    },

    resetState(state, payload) {
      Object.assign(state, { leagues: [] });
    },
  },
  actions: {
    getLeagues({ commit }, param) {
      return servicesFactory
        .createService(servicesFactory.serviceType.enums.services.lmsService)
        .leagueService.getLeagues(param)
        .then((response) => {
          commit("setLeagues", response.data.response);
        });
    },
    resetNotes({ commit }) {
      return commit("resetState");
    },
  },
};
