import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["hero", "about", "levels", "contact"].map((item, index) => (
        <a
          href={`#${item}`}
          style={active === item ? { backgroundColor: "#052e5a" } : {}}
          style={{ zIndex: 10 }}
          key={item + index}
          className="app__navigation-dot"
        />
      ))}
    </div>
  );
};

export default NavigationDots;
