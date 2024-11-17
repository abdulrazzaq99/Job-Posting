import PropTypes from "prop-types";

const Card = ({ children, bg }) => {
  return <div className={`p-6 rounded-lg shadow-md ${bg}`}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  bg: "bg-gray-100",
};

export default Card;
