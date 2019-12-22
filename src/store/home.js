import axios from 'axios'
//首页逻辑
const GET_LIST = 'HOME/GET_LIST'
const changeList = data => ({
    type: GET_LIST,
    data,
})
export const getHomeList = server => {
    return (dispatch, getState, axiosInstance) => {
        return axios.get('/api/home/list').then(res => {
            const {data} = res.data
            dispatch(changeList(data))
        })
        //     .catch(()=>{
        //     dispatch(changeList({}))
        // })
    }
}
const defaultState = {
    userInfo: {}
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_LIST:
            const newState = {
                ...state,
                userInfo: action.data
            }
            return newState
        default:
            return state
    }
}