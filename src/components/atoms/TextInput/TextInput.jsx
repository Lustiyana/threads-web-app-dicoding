import PropType from "prop-types"

const TextInput = ({type, placeholder, value, onChange}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input input-bordered w-full mb-2"
    />
  );
};

export default TextInput;

TextInput.propTypes = {
  type: PropType.string,
  placeholder: PropType.string,
  value: PropType.string,
  onChange: PropType.func
}