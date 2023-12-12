import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../../components/layout/MainLayout/MainLayout";
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { getThreads } from "../../redux/features/threads/action";

const HomePage = () => {
  const { threads } = useSelector((state) => state.threads);
  const {data} = useSelector((state)=>state.newThread)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getThreads());
  }, [data]);
  return (
    <MainLayout title="Home">
      <div>
        {threads?.map((thread) => (
          <div key={thread.id} className="border-b-2 py-4">
            <div className="flex">
              <div className="px-4 py-1 mb-4 text-sm border rounded-full">
                #{thread?.category}
              </div>
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <h3 className="font-bold text-xl">
                {thread?.title}
              </h3>
              <div className="line-clamp-3" dangerouslySetInnerHTML={{ __html: thread.body }} />
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
        ))}
      </div>
    </MainLayout>
  );
};
export default HomePage;
