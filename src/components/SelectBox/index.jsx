import PropTypes from "prop-types";

const SelectBox = ({ className }) => {
  return (
    <select className={className}>
      <option>Select Option</option>
      <option value={1}>value one</option>
      <option value={2}>value two</option>
      <option value={3}>value three</option>
      <option value={4}>value four</option>
      <option value={5}>value five</option>
    </select>
  );
};

SelectBox.defaultProps = {
  className: "",
};

SelectBox.propTypes = {
  className: PropTypes.string,
};

export default SelectBox;
