import Categories from "../../Categories/Categories";
import PostModal from "../../PostModal/PostModal";
import Sidebar from "../../Sidebar/Sidebar";
import PropType from "prop-types";

const MainLayout = ({ children, title }) => {
  return (
    <div className="w-full">
      <Sidebar />
      <div className="flex justify-center min-h-screen">
        <div className="p-12 border-x-2 w-1/2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <div>{children}</div>
        </div>
      </div>
      <Categories />
      <PostModal />
    </div>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropType.any,
  title: PropType.string,
};
