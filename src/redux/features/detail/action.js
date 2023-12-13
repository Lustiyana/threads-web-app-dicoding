import * as types from '../../../constants/types'
import { getDetailService } from '../../../services/threads'

export const getDetailThread=(id)=>async(dispatch)=>{
  try {
    dispatch({
      type: types.GET_DETAIL_LOADING,
      payload: true
    })
  
    const data = await getDetailService(id)
  
    dispatch({
      type: types.GET_DETAIL_LOADING,
      payload: data
    })
  } catch(error) {
    dispatch({
      type: types.GET_DETAIL_FAILED,
      payload: error
    })
  }
}