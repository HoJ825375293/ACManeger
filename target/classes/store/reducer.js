const defaultState = {
    user:0,
    UserName:"default",
    roomItem:{},
}
export default (state = defaultState, action) => {
    if(action.type === "user"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.user = action.user;
        newState.UserName = action.UserName;
        return newState;
    }
    if(action.type === "RoomPage"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.roomItem = action.roomItem;
        return newState;
    }
    return state;
}