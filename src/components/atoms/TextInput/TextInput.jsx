import PropType from "prop-types"

const TextInput = ({type, placeholder}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input input-bordered w-full mb-2"
    />
  );
};

export default TextInput;

TextInput.propTypes = {
  type: PropType.string,
  placeholder: PropType.string
}