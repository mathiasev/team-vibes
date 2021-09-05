const vibes = {
  namespaced: true,
  state: {
    responses: [{ user: "mathiasev", vibe: "+1" }],
  },

  actions: {
    addVibe({ commit }, vibe) {
      commit("addVibe", { vibe });
    },
  },

  mutations: {
    addVibe(state, vibe) {
      state.responses.push(vibe);
    },
  },

  getters: {
    getVibes: (state) => {
      return state.responses;
    },
  },
};

export default vibes;
