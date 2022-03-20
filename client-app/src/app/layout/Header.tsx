import React from 'react';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/img/logo.png';
import './styles.css';

interface Props {
  openForm: () => void;
}

export default function Header({openForm}: Props) {
  return (
    <>
      <div className="Header">
        <div className="Row">
          <img src={logo} height={85} width={85} alt="Logo" />
        </div>
        <div className="Row">
          {/* <button onClick={() => }>Login</button> */}
          <Button className='styledBtn' onClick={openForm}>New Article</Button> 
          {/* <button onClick={() => }>Logout</button> */}
        </div>
      </div>
    </>
  )
}