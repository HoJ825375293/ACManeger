const defaultState = {
    roomList:[
        {
          key: '0',
          room: '101',
          temperature: 25,
          wind: '关机',
          windForce:0,
          money: 0,
          env:32
        },
        {
          key: '1',
          room: '102',
          temperature: 25,
          wind: '关机',
          windForce:0,
          money: 0,
          env:28,
        },{
          key: '2',
          room: '103',
          temperature: 25,
          wind: '关机',
          windForce:0,
          money: 0,
          env:30,
        },{
          key: '3',
          room: '104',
          temperature: 25,
          wind: '关机',
          windForce:0,
          money: 0,
          env:29
        },{
          key: '4',
          room: '105',
          temperature: 25,
          wind: '关机',
          windForce:0,
          money: 0,
          env:35
        },
      ],
}
export default (state = defaultState, action) => {
    if(action.type === "Set"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.roomList = action.roomList;
        return newState;    
    }
    
    return state;
}