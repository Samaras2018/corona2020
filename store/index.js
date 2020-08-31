export const state = () => ({
        totalCases: 2,
        totalRecovered: 0,
        totalDeath: 0,
        dataSeries : 0
  })
  
  export const mutations = {
    addTotalCases (state, value) {
      state.totalCases = value
    },
    addTotalRecovered (state, value) {
        state.totalRecovered = value
      },
      addTotalDeath (state, value) {
        state.totalDeath = value
      },
      addDataSeries (state, value) {
        state.dataSeries = value
      },
  }


  export const actions = {
    async setCases({commit}, data) {
        await commit('addTotalCases', data)
        console.log('gg')
      },
      async setRecovered({commit}, data) {
        await commit('addTotalRecovered', data)
        console.log('gg')
      },
      async setDeath({commit}, data) {
        await commit('addTotalDeath', data)
        console.log('gg')
      },
      async setDataSeries({commit}, data) {
        await commit('addDataSeries', data)
        console.log('gg')
      },
  }