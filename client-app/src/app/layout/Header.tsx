import React from 'react';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/img/logo.png';
import { useStore } from '../stores/store';
import './styles.css';


export default function Header() {
  const { articleStore } = useStore();

  return (
    <>
      <div className="Header">
        <div className="Row">
          <img src={logo} height={85} width={85} alt="Logo" />
        </div>
        <div className="Row">
          <Button className='styledBtn' onClick={() => articleStore.openForm()}>New Article</Button> 
        </div>
      </div>
    </>
  )
}