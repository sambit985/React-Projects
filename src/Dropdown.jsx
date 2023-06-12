import { useState } from "react";

const Dropdown = () => {

  const [isActive, setActive] = useState(false);
  const [list] = useState(['I am a Student', 'Proffesional worker', 'Trainer']);
  const [value, setValue] = useState('');

  const onClickHandeler = (e) => {
    setValue(e.target.textContent);
    setActive(false);
  }

  const onMouseHover = () => {
    setActive(true);
  }

  const results = list.map((result, index) => {
    return <a href="#" onClick={onClickHandeler} key={index}>{result}</a>;
  })

  return (
    <div className="dropdown">
      <h1>Would you like to select from dropdown?</h1>
      <h3>{value}</h3>
      <button className="dropbtn" onMouseEnter={onMouseHover}>Select</button>
      <div className="dropdown-content" style={{ display: `${isActive ? 'block' : 'none'}` }}>
        {results}
      </div>
    </div>
  );
}

export default Dropdown;