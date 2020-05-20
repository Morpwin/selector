const ADD_ITEM = "ADD_ITEM"
const INIT_EVENTS = "INIT_EVENTS"
const DELETE_ITEM = "DELETE_ITEM"
export default {
    [ADD_ITEM](state, obj) {
        state.title = obj.tip;
        state.content = obj.content;
        let len = state.events.length;
        state.events.push(Object.assign({id: len+1}, obj))
        console.log(state.events)
    },
    [INIT_EVENTS](state, obj) {
        state.events = obj
    },
    [DELETE_ITEM](state, id) {
        state.events.splice(id-1, 1)
        console.log(state.events)
        state.events.map((v, i) => {
            return v.id = i+1
        })

    }
}