import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import indexReducer from './index'
import homeReducer from './home'
const reducer = combineReducers({
    index:indexReducer,
    home:homeReducer
})
//创建store
// const store = createStore(reducer,applyMiddleware(thunk))
// export default store
export const getServerStore = () =>{
    return createStore(reducer,applyMiddleware(thunk))
}
export const getClientStore = () =>{
    //通过window.__context来获取数据
    const defaultState = window.__context?window.__context:{}
    return createStore(reducer,defaultState,applyMiddleware(thunk))
}