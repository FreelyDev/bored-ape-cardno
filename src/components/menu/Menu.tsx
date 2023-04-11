import "./menu.scss"
import {HashLink} from 'react-router-hash-link'
type MenuType = {
    menuOpen : boolean;
    setMenuOpen(flag:boolean):void;
};

export default function Menu({menuOpen, setMenuOpen}:MenuType) {
    return (
        <div className={"sidebar " + (menuOpen && "active")}>
            <ul>
                <li onClick = {()=> setMenuOpen(false)} className = {"menuItem1 " + (menuOpen && "active")}>
                    <HashLink to="/#home">Portal</HashLink>
                </li>
                <li onClick = {()=> setMenuOpen(false)} className = {"menuItem2 " + (menuOpen && "active")}>
                <HashLink to="/#season1" smooth>Season1</HashLink>
                </li>
                <li onClick = {()=> setMenuOpen(false)} className = {"menuItem3 " + (menuOpen && "active")}>
                <HashLink to="/#season2" smooth>Season2</HashLink>
                </li>
                
                <li onClick = {()=> setMenuOpen(false)} className = {"menuItem4 " + (menuOpen && "active")}>
                <HashLink to="/#paired" smooth>PairedNFTs</HashLink>
                </li>
            </ul>
        </div>
    )
}

