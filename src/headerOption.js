import React from 'react'
import "./headerOption.css"

function headerOption({Icon, title}) {
  return (
    <div className='HeaderOption'>
        {Icon && <Icon className="HeaderOption_Icon"/>}
        <h3 className='HeaderOption_title'>{title}</h3>
    </div>
  );
}

export default headerOption;
