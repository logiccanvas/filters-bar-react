import clx from "classnames";
import PropTypes from "prop-types";

const Input = ({ name, className, ...rest }) => {
  return (
    <input name={name} className={clx("form-control", className)} {...rest} />
  );
};

Input.defaultProps = {
  name: "",
  className: "",
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
