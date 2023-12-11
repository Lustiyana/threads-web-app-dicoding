import Categories from "../../Categories/Categories";
import Sidebar from "../../Sidebar/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <div className="flex-1 p-12 border-x-2">{children}</div>
      <div className="w-1/4">
        <Categories/>
      </div>
    </div>
  );
};

export default MainLayout;
