import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className='text-center bg-neutral-600 bg-opacity-35 text-neutral-400 py-2'>
            <div className='flex items-center justify-center gap-4'>
                <Link to="/" >Nosotros</Link>
                <Link to="/">Contacto</Link>
            </div>
            <p className='text-sm'>Desarrollado por <Link to="https://creativa.dev" target='_blank'>Creativa.dev</Link></p>
      </footer>
    )
}

export default Footer;