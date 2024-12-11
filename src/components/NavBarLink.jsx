//  ******************************************************
//  **********  /01-apps-react-cra/  *********************
//  **********  /src/components/NavBarLink.jsx  **********
//  ******************************************************



import { Link, useLocation } from 'react-router-dom';
import { useState, useRef } from 'react';


export const NavBarLink = () => {

    const location = useLocation();

    const [activeLink, setActiveLink] = useState(location.pathname);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuRef = useRef(null);

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    const toggleMenu = () => {

        if (isMenuOpen) menuRef.current.style.maxHeight = '0px'; // Cerrar el menú
        else menuRef.current.style.maxHeight = `${menuRef.current.scrollHeight}px`; // Abrir el menú

        setIsMenuOpen((prev) => !prev);
    };


    return (

        <nav className="navbarlink">

            <div className="navbartitle" onClick={toggleMenu}> Menú </div>

            <div
                ref={menuRef}
                className={`menu ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}
                style={{ maxHeight: '0px', overflow: 'hidden', transition: 'max-height 2s ease, opacity 0.5s ease' }}
            >
                {[

                    { path: '/use-state', label: 'Use State' },
                    { path: '/use-ref', label: 'Use Ref' },
                    { path: '/conversor-euro-dolar', label: 'Conversor Euro Dolar' },
                    { path: '/arrays', label: 'Arrays' },
                    { path: '/contador', label: 'Contador' },
                    { path: '/saludo', label: 'Saludo' },
                    { path: '/renderizado-condicional', label: 'Renderizado Condicional' },
                    { path: '/ejercicio-practico-1', label: 'Ejercicio Practico 1' },
                    { path: '/styled-components', label: 'Styled Components' },
                    { path: '/app-memorizar-texto', label: 'App Memorizar Texto' },
                    { path: '/404', label: 'Not Exist Route' },

                ].map(({ path, label }) => (

                    <Link
                        key={path}
                        to={path}
                        className={activeLink === path ? 'active-link' : ''}
                        onClick={() => handleLinkClick(path)}
                    >
                        {label}
                    </Link>

                ))}

            </div>

        </nav>
    );
};
