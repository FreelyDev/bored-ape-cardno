import './connectModal.scss'
interface Props {
    showConnectModal: boolean,
    setShowConnectModal?: any

}
const ConnectModal: React.FC<Props> = ({
    showConnectModal,
    setShowConnectModal
}) => {


    const connectMetamask = () => {
        setShowConnectModal(false);
    }
    const connectWalletConnector = () => {
        setShowConnectModal(false);
    }
    const connectCoinbaseConnector = () => {
        setShowConnectModal(false);
    }
    const cloaseHandle = (e:any)=>{
        if(e.target.className.includes("connectModal"))
        {
            setShowConnectModal(false)
        }

    }
    return (
        <div className={showConnectModal === true ? "connectModal active" : "connectModal"}onClick={(e) => {cloaseHandle(e)}}>
            <div className="modelContent"style={{backgroundImage: `url("assets/bar_03.png")` }}>
                <div className="connectWalletHeader">
                    <h1 className="connectWalletTitle">Connect Wallet</h1>
                    <button className="connectModalCloseButton" onClick={() => { setShowConnectModal(false) }}><i className="fas fa-times"></i></button>
                </div>
                <div className="connectWalletWrapper">
                    <div className="metaMask" onClick={connectMetamask}>
                        <div className="left">
                            <div className="icon">
                                <img src="/assets/metamask.png" alt="" />
                            </div>

                        </div>
                        <div className="middle"><h2>Metamask</h2><p>Connect using browser wallet</p></div>
                        <div className="right"><button><i className="fas fa-chevron-right"></i></button></div>
                    </div>
                    <div className="wallet" onClick={connectCoinbaseConnector}>
                        <div className="left">
                            <div className="icon"><img src="/assets/coinbase.png" alt="" /></div>
                        </div>
                        <div className="middle"><h2>Coinbase Connect</h2><p>Connect using Coinbase</p></div>
                        <div className="right"><button><i className="fas fa-chevron-right"></i></button></div>
                    </div>
                    <div className="wallet" onClick={connectWalletConnector}>
                        <div className="left">
                            <div className="icon"><img src="/assets/wallet-connect.png" alt="" /></div>
                        </div>
                        <div className="middle"><h2>Wallet Connect</h2><p>Connect using mobile wallet</p></div>
                        <div className="right"><button><i className="fas fa-chevron-right"></i></button></div>
                    </div>
                </div>
                
            </div>


        </div>
    )
}
export default ConnectModal;