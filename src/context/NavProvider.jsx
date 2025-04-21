import PropTypes from 'prop-types';
import React, { useState, createContext, useEffect } from 'react';

export const NavContext = createContext(); // Création du contexte

const NavProvider = ({ children }) => {  
  const [onDarkBg, setOnDarkBg] = useState(false);

  const toggleColor = (val) => {
    setOnDarkBg(val);
  }

    // Réinitialisation à false au chargement de la page
    useEffect(() => {
      setOnDarkBg(false);
    }, []);

  return (
    <NavContext.Provider value={{ onDarkBg, toggleColor }}>
      {children}
    </NavContext.Provider>
  );
};

NavProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavProvider;
