export default {
    addItem({commit}, obj) {
        commit("ADD_ITEM", obj)
    },
    initEvents({commit}, obj) {
        console.log(obj)
        commit("INIT_EVENTS", obj)
    },
    deleteItem({commit}, id) {
        commit("DELETE_ITEM", id)
    }
}