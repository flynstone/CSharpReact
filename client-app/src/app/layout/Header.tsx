import React from 'react';
import logo from '../../assets/img/logo.png';
import './styles.css';

export default function Header() {
  return (
    <header>
      <div className="Header">
        <div className="Row">
          <img src={logo} height={85} width={85} alt="Logo" />
        </div>
        <div className="Row">
          {/* <button onClick={() => }>Login</button> */}

          {/* <button onClick={() => }>Logout</button> */}
        </div>
    </div>
    </header>
  )
}