// const initalState = {
//     name: "",
//     classes: "",
//     techerName: ""
// }

const initalState =[]

const reducer = (state = initalState, action) => {

    switch (action.type) {
        case "createUser":
            console.log(state);
            console.log(action);
            return [...state, action.payload]

        case "removeUser":
            return state.filter(t=>t.name !=action.payload.name)
        default:
            return state
    }


}

export default reducer