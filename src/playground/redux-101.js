import { createStore } from 'redux'

// Action generators are functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ({ count }) => ({
  type: 'SET',
  count
})

const resetCount = () => ({
  type: 'RESET'
})

// Reducers
// 1. Reducers are pure functions. Pure functions are functions which output depends only on the input
// const add = (a, b) => {
//   return a + b
// }
// 2. Never change state of action, it just reads state and action arguments.

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'RESET':
      return {
        count: 0
      }
    case 'SET':
      return {
        count: action.count
      }
    default: 
      return state  
  }
}

const store = createStore(countReducer)

// Watch for changes in the redux store state
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// })

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount()) 

store.dispatch(resetCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch(setCount({ count: 100 }))
