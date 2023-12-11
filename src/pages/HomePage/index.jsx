import { useDispatch, useSelector } from "react-redux";
import PostModal from "../../components/PostModal/PostModal";
import MainLayout from "../../components/layout/MainLayout/MainLayout";
import { Icon } from "@iconify/react";
import { incrementCounter } from "../../redux/features/counter/action";

const HomePage = () => {
  const {counter} = useSelector(state=>state.counter)
  const dispatch = useDispatch()
  return (
    <MainLayout>
      <div>
        <div className="border-b-2 py-4 ">
          <div className="flex">
            <div className="px-4 py-1 mb-4 text-sm border rounded-full">
              #redux
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <h3 className="font-bold text-xl">
              Bagaimana pengalamanmu belajar Redux
            </h3>
            <p>
              Coba ceritakan dong, gimana pengalaman kalian belajar Redux di
              Dicoding?
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex border rounded-full px-4 py-2 w-32 gap-2">
              <div className="flex-1 flex items-center border-r-2">
                <Icon icon="solar:like-broken" width="20" height="20" />
                <div>Like</div>
              </div>
              <Icon
                icon="solar:like-broken"
                width="20"
                height="20"
                rotate={2}
              />
            </div>
            <Icon icon="iconamoon:comment-light" width="20" height="20" />
          </div>
        </div>
        <PostModal/>
        <div>{counter}</div>
        <button onClick={()=>dispatch(incrementCounter())}>Click</button>
      </div>
    </MainLayout>
  );
};
export default HomePage;
