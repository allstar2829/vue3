import { createStore } from "vuex";

export default createStore({
  state: {
    allCountries: [],
    currentChooseInfo: null,
    isReverse: false,
    isSearch: "",
    tableData: 1,
    pageSize: 25,
    currentPage: 1,
    calculatedPage: 1,
    username: "iris",
    password: 1234,
  },
  mutations: {
    setCountries(state, country) {
      state.allCountries = country;
    },
    infoOpen(state, index) {
      state.currentChooseInfo = index;
    },
    infoClose(state) {
      state.currentChooseInfo = null;
    },
    changeOrder(state) {
      state.isReverse = !state.isReverse;
    },
    searchString(state) {
      state.isSearch = "";
    },
    previousPage(state) {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },
    nextPage(state) {
      if (state.currentPage === state.calculatedPage) {
        return false;
      } else {
        state.currentPage += 1;
      }
    },
    calculatedPage(state, page) {
      state.calculatedPage = page;
    },
    reset(state) {
      state.currentPage = 1;
    },
  },
  actions: {},
  modules: {},
});
