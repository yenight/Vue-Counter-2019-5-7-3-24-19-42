const mutations = {
    calculateSum (state, payload) {
        state.sum += payload.number
    },
    resetSum (state) {
        state.sum = 0
    }
}

export default mutations