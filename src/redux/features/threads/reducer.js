import * as types from '../../../constants/types'

const initialState = {
  data: null,
  loading: false,
  error: null
}

export default function ThreadsReducer(state=initialState, action) {
  switch(action.type){
    case types.GET_THREADS_LOADING:
      return({
        loading: action.payload,
      })
    case types.GET_THREADS_SUCCESS:
      return({
        data: action.payload,
        loading: true,
      })
    case types.GET_THREADS_FAILED:
      return({
        error: action.payload
      })
    default:
      return state
  }
}