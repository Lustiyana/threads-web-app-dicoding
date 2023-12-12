import React, { useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { getLeaderboards } from "../../redux/features/leaderboards/action";

const getInitials = (name) => {
  const words = name.split(" ");
  const initials = words.map((word) => word.charAt(0)).join("");
  return initials.toUpperCase();
};

function getRandomColor() {
  // Generate a random color in hexadecimal format
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Leaderboards = () => {
  const { leaderboards } = useSelector((state) => state.leaderboards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeaderboards());
  }, []);

  console.log(leaderboards);
  return (
    <MainLayout title="Leaderboard">
      <div className="w-full flex flex-col gap-4">
        {leaderboards?.map((leaderboard) => (
          <div key={leaderboard.id} className="flex justify-between items-center">
            <div className="flex gap-8 items-center">
            <div style={{ backgroundColor: getRandomColor() }} className="rounded-full">
              <div className="w-12 h-12 flex justify-center items-center text-white font-bold">
                {getInitials(leaderboard.user.name)}
              </div>
            </div>
            <div className="font-bold text-xl">{leaderboard.user.name}</div>
            </div>
            <div className="">{leaderboard.score}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default Leaderboards;
