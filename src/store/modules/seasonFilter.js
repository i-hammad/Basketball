import { servicesFactory } from "../../services/serviceFactory";
export default {
  namespaced: true,
  state: {
    seasons: [],
  },
  getters: {
    getAllSeasons(state) {
      return state.seasons;
    },
  },
  mutations: {
    setSeasons(state, seasons) {
      state.seasons = seasons;
    },

    resetState(state, payload) {
      Object.assign(state, { seasons: [] });
    },
  },
  actions: {
    getSeasons({ commit }, param) {
      return servicesFactory
        .createService(servicesFactory.serviceType.enums.services.basketballService)
        .seasonService.getSeasons(param)
        .then((response) => {
          commit("setSeasons", response.data.response);
        });
    },
    resetNotes({ commit }) {
      return commit("resetState");
    },
  },
};
