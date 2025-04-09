
import PropTypes from 'prop-types';
export const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`rounded-[25px] px-12 py-3 text-[14px] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
};
