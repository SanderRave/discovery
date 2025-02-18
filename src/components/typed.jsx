import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Typed from "typed.js";

const TypedText = ({ strings, typeSpeed, backSpeed, loop }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: strings || ["Default Text"],
      typeSpeed: typeSpeed || 50,
      backSpeed: backSpeed || 25,
      loop: loop || false,
    });

    return () => {
      typed.destroy();
    };
  }, [strings, typeSpeed, backSpeed, loop]);

  return <span ref={typedRef} />;
};

// PropTypes validatie
TypedText.propTypes = {
  strings: PropTypes.arrayOf(PropTypes.string).isRequired,
  typeSpeed: PropTypes.number,
  backSpeed: PropTypes.number,
  loop: PropTypes.bool,
};

// Standaardwaarden
TypedText.defaultProps = {
  typeSpeed: 50,
  backSpeed: 25,
  loop: false,
};

export default TypedText;
