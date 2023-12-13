import { useParams } from "react-router-dom"
import MainLayout from "../../components/layout/MainLayout/MainLayout"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getDetailThread } from "../../redux/features/detail/action"

const DetailPage = () => {
  const {id} = useParams()
  const {thread} = useSelector((state)=>state.detailThread)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getDetailThread(id))
  }, [])
  
  console.log(thread)
  return (
    <MainLayout>
      <div>DetailPage</div>

    </MainLayout>
  )
}

export default DetailPage