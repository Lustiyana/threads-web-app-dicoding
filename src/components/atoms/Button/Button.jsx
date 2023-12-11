import PropType from 'prop-types'

const Button = ({name, onClick, outline}) => {
  return (
    <button onClick={onClick} className={`btn btn-primary ${outline?'btn-outline':''}`}>{name}</button>
  )
}

export default Button

Button.propTypes = {
  name: PropType.string,
  onClick: PropType.func,
  outline: PropType.bool
}