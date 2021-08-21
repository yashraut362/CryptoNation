export const state = () => ({
  currentVideoTime: 0
});

export const mutations = {};

export const getters = {};

export const actions = {
  Gettopcrypto({ dispatch, commit }, payload) {
    const api =
      process.env.api +
      "coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false";
    return this.$axios
      .$get(api, payload)
      .then(response => {
        return response;
      })
      .catch(err => console.log(err));
  },
  Getallcrypto({ dispatch, commit }, payload) {
    const api =
      process.env.api +
      "coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false";
    return this.$axios
      .$get(api, payload)
      .then(response => {
        return response;
      })
      .catch(err => console.log(err));
  },
  GetTrendingcrypto({ dispatch, commit }, payload) {
    const api = process.env.api + "search/trending";
    return this.$axios
      .$get(api, payload)
      .then(response => {
        return response;
      })
      .catch(err => console.log(err));
  }
};
