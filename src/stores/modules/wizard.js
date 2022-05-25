const state = {
  dataWizardState:null
};

const getters = {
  dataWizard: (state) => state.dataWizardState
};

const actions = {
  SetDataWizard({commit}, data) {
    commit("setDataWizard",data);
  },
  RemoveDataWizard({commit}) {
    commit("removeDataWizard");
  }
};

const mutations = {
  setDataWizard(state, data) {
    state.dataWizardState = data;
  },
  removeDataWizard(state) {
    state.dataWizardState = null;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};