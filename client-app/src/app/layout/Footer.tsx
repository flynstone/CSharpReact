import React from 'react';

const FooterStyle = {
  backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-linen.png")'
}

export default function Footer() {
  return (
    <footer style={FooterStyle}>
      <div className='Container'>
        <h2>About</h2>
      </div>
    </footer>
  );
}