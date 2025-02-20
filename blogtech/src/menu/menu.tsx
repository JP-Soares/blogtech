import React, { useState } from "react";
import "./menu.css"

export default function MenuBar(){
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setIsSubMenuOpen(prevState => !prevState);
    };

    return (
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li>
                    <a href="#" className="submenu" onClick={toggleSubMenu}>Categorias</a>
                </li>
                <li>
                    <input type="text" name="busca" />
                </li>
            </ul>
            {isSubMenuOpen && (
                        <ul className="submenu-list">
                            <li><a href="#">Fones de ouvido</a></li>
                            <li><a href="#">Teclados</a></li>
                            <li><a href="#">Mouses</a></li>
                            <li><a href="#">Mouses</a></li>
                            <li><a href="#">Mouses</a></li>
                        </ul>
                    )}
        </nav>
    );
}
