// const loggerMiddleware = storeAPI => next => action => {
//      console.log('dispatching', action)
//      let result = next(action)
//      console.log('next state', storeAPI.getState())
//      return result
// }

const log = (store) => (next) => (action) => {
     // console.log(store);
     // console.log(next);
     // console.log(action);            // dispatch action
     console.log(store.getState());  // updated status

     const result = next(action)

     return result;
}

export default log;

// # store

// {getState: ƒ, dispatch: ƒ}
// dispatch : (action, ...args) => dispatch(action, ...args)
// getState : ƒ getState()
// [[Prototype]]: Object


// #next 
// dispatch(action) {
//      var _a;
//      try {
//        notifying = !((_a = action == null ? void 0 : action.meta) == null ? void 0 : _a[SHOULD_AUTOBATCH]);
//        shouldNotifyAtEndOfTick = !notifying;…


// #action
// {type: 'counter/increment', payload: undefined}
// {type: 'counter/incrementByAmount', payload: 100}

// getState() 
// -before state
// {counter: {…}}counter: {value: 0}value: 0[[Prototype]]: Object[[Prototype]]: Object