import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

const Email = ({ value }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = useCallback(() => {
    setIsVisible(true);
  }, []);

  return (
    <span data-testid="show-email-component">
      {isVisible ? (
        value
      ) : (
        <button
          type="button"
          data-testid="show-email-button"
          onClick={handleClick}
        >
          show email
        </button>
      )}
    </span>
  );
};

Email.propTypes = {
  value: PropTypes.node.isRequired,
};

export default Email;
