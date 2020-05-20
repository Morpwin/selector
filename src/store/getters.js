export default {
    getEvents: (state) => (id) => {
        // let length = state.events.length
        // let id = Math.floor(Math.random() * length + 1)
        return state.events.find(event => event.id === id)
    }
}