import * as types from '../../../constants/types'
import { getAllProfileService } from '../../../services/profiles'

export const getUsers = () => async(dispatch)=>{
  try{
    dispatch({
      type: types.GET_ALL_USERS_LOADING,
      payload: true
    })

    const data = await getAllProfileService()
    console.log(data)

    dispatch({
      type: types.GET_ALL_USERS_SUCCESS,
      payload: data.data.users
    })
  } catch(error){
    console.log(error)
    dispatch({
      type: types.GET_ALL_USERS_FAILED,
      payload: error
    })
  }
}