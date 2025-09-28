import React, { useState } from 'react';
import './ColorPicker.css';


export default function ColorPicker(){
    const [selectedColor, setSelectedColor] = useState({ hex: null, name: null });
    const [focusedIndex, setFocusedIndex] = useState(null);
    const [hoveredHex, setHoveredHex] = useState(null);

    const colors = [
    { name: "Red", hex: "#FF0000" },
    { name: "Green", hex: "#00FF00" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Yellow", hex: "#FFFF00" },
    { name: "Cyan", hex: "#00FFFF" },
    { name: "Magenta", hex: "#FF00FF" },
    ];

    function handleClick(color){
        setSelectedColor(color);
    }

    function handleMouseEnter(index) {
        setHoveredHex(colors[index].hex);
        setFocusedIndex(index);
    }

    function handleMouseLeave() {
        setHoveredHex(null);
        setFocusedIndex(null);
    }

    function handleFocus(index) {
        setFocusedIndex(index);
        setHoveredHex(colors[index].hex);
    }

    function handleBlur() {
        setFocusedIndex(null);
        setHoveredHex(null);
    }

    function handleKeyDown(e, index) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setSelectedColor(colors[index]);
        }
        if (e.key === "ArrowRight") {
            setFocusedIndex((prev) => (prev === null ? 0 : (prev + 1) % colors.length));
        }
        if (e.key === "ArrowLeft") {
            setFocusedIndex((prev) => (prev === null ? 0 : (prev - 1 + colors.length) % colors.length));
        }
    }


    return (
        <div className="color-picker">
  <h1>Color Picker</h1>
  <div className="color-list">
    {colors.map((color, index) => (
      <div
        key={index}
        className={`color-item ${focusedIndex === index ? 'focused' : ''}`}
        style={{ backgroundColor: color.hex }}
        onClick={() => handleClick(color)}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
        onFocus={() => handleFocus(index)}
        onBlur={handleBlur}
        onKeyDown={(e) => handleKeyDown(e, index)}
        tabIndex={0}
      >
    
        {hoveredHex === color.hex ? (
          <span className="color-code">{color.hex}</span>
        ) : selectedColor.hex === color.hex ? (
          <span className="color-code">{selectedColor.name}</span>
        ) : null}
      </div>
    ))}
  </div>
</div>
    );
}