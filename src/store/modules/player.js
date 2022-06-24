const getDefaultState = () => {
  return {
    videoPlayer: null,
  };
};

export default {
  namespaced: true,
  state: getDefaultState(),
  getters: {
    getVideoPlayer(state) {
      return state.videoPlayer;
    },
  },
  mutations: {
    setVideoPlayer(state, paylaod) {
      state.videoPlayer = paylaod;
    },
    resetState(state) {
      if(state.videoPlayer != null) {
        state.videoPlayer.dispose();
      }
      Object.assign(state, getDefaultState());
    },
  },
  actions: {
    videoPlayer({ commit }, param) {
      commit("setVideoPlayer", param.data.player);
    },
    resetState({ commit }) {
      commit("resetState");
    },
  },
};
