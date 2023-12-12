import SidebarLink from "../atoms/SidebarLink/SidebarLink";
import Button from "../atoms/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  console.log(localStorage.getItem("token"));

  return (
    <div className="flex flex-col justify-between w-1/4 p-12 fixed h-full bg-white">
      <div>
        <div className="mb-8">Threads</div>
        <div className="flex flex-col gap-4">
          <SidebarLink
            name="Homepage"
            icon="home"
            path="/"
            active={location.pathname == "/"}
          />
          <SidebarLink
            name="Leaderboards"
            icon="chart"
            path="/leaderboards"
            active={location.pathname == "/leaderboards"}
          />
        </div>
      </div>
      {localStorage.getItem("token") == null ? (
        <div className="flex gap-4">
          <Button
            name="Login"
            onClick={() => navigate("/login")}
            outline={true}
          />
          <Button name="Register" onClick={() => navigate("/register")} />
        </div>
      ) : (
        <Button name="Logout" onClick={handleLogout} />
      )}
    </div>
  );
};
export default Sidebar;
