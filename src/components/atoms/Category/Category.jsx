import PropType from 'prop-types'

const Category = ({text}) => {
  return (
    <div className="inline-block px-4 py-1 mb-4 text-sm border rounded-full wh-auto">#{text}</div>
  )
}

export default Category

Category.propTypes={
  text: PropType.string
}