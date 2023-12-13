import PropType from "prop-types";
import { timeDifferent } from "../../utils/date";

const Owner = ({ name, avatar, days }) => {
  return (
    <div className="flex gap-2 items-center mb-4">
      <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
      <div>
        <div className="font-bold">{name}</div>
        <div className="text-xs">{timeDifferent(days)} hari yang lalu</div>
      </div>
    </div>
  );
};

export default Owner;

Owner.propTypes = {
  name: PropType.string,
  avatar: PropType.string,
  days: PropType.string,
};
