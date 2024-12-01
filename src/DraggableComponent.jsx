import React, { useState } from "react";

const DraggableComponent = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [selectedOption, setSelectedOption] = useState('');
  const [changeStyle,setStyleChnage]=useState(
    {bgc:'green',
    pading:"20px",
    bdr:"2px solid black"
  })
  const optionToSelect=['other','women','man']
  
  
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    if (e.target.value === "man") {
      setStyleChnage({ bgc: 'red', pading: '20px',bdr:"5px solid black" });  
    } else if (e.target.value === "women") {
      setStyleChnage({ bgc: 'blue', pading: '50px',bdr:"10px solid yellow"  });  
    } else {
      setStyleChnage({ bgc: 'green', pading: '60px',bdr:"2px solid red"  });  
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      style={{
        position: "absolute",
        border:  changeStyle.bdr,
        borderRadius:"10px",
        padding: changeStyle.pading,
        backgroundColor: changeStyle.bgc,

        left: position.x,
        top: position.y,
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <p>
        This is a draggable paragraph component. Click and drag to move it
        around.
       <div className="dropdown">

        <select name="gender" id="gender" value={selectedOption} onChange={handleSelectChange}>
          {optionToSelect.map((item,index)=>{
            return <option value={item} key={index}>{item}</option>
          })}
         </select>
          </div>

        <h2>pick selected option : {selectedOption} </h2>
      </p>
    </div>
  );
};

export default DraggableComponent;
