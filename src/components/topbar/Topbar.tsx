import AccountModal from 'components/accountModal/AccountModal';
import { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link'
import { truncateWalletString } from 'utils';
import ConnectModal from '../connectModal/ConnectModal';
import './topbar.scss'

type MenuType = {
    menuOpen?: boolean;
    setMenuOpen(flag: boolean): void;
};
export default function Topbar({ menuOpen, setMenuOpen }: MenuType) {
    const [showConnectModal, setShowConnectModal] = useState(false);
    const [showAccountModal, setShowAccountModal] = useState(false);

    const [loginStatus, setLoginStatus] = useState(false);

    const [isDown, setIsDown] = useState('')
    const handleDown = (value: string) => {
        setIsDown(value)
    }
    const handleUp = (value: string) => {
        setIsDown(value)
    }

    return (
        <div className="topbar">
            <div className="logo">
                <HashLink to="/#home" ><img src="assets/logo.png" alt="" /></HashLink>
            </div>
            <div className="navList">
                <ul>
                    
                    <li><HashLink to="/" smooth>Mint</HashLink></li>
                    <li><HashLink to="/staking" smooth>Staking</HashLink></li>

                </ul>
            </div>
            <div className="btns">
                <div
                    className={isDown === 'connectBtnDown' ? "connectBtn button connectBtnDown" : "connectBtn button"}
                    onMouseDown={() => { handleDown('connectBtnDown') }}
                    onMouseUp={() => { handleUp('') }}
                    onClick={() => { !loginStatus ? setShowConnectModal(true) : setShowAccountModal(true) }}
                    style={{backgroundImage: `url("assets/button01.png")`}}
                >
                    {loginStatus ? truncateWalletString('0xCE6Add5f1698496A1fdffsdfsd63B8E96620855b9') : "CONNECT WALLET"}
                    
                </div>
               
            </div>

            {/* <div className={(menuOpen ? "hamburger active" : "hamburger")} onClick={() => setMenuOpen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div> */}
            <AccountModal  showAccountModal={showAccountModal} setShowAccountModal={setShowAccountModal} />
            <ConnectModal showConnectModal={showConnectModal} setShowConnectModal={setShowConnectModal} />
        </div>
    )
}
