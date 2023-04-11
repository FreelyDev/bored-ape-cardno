import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import './home.scss'

type LoadingType = {
    setIsLoading?(flag: boolean): void;
};

export default function Home({ setIsLoading }: LoadingType) {

    const [imgCount, setImgCount] = useState(0);
    const onLoad = () => {
        setImgCount(imgCount + 1)
    }
    useEffect(() => {
        if (imgCount >= 6) {
            setTimeout(() => {
                setIsLoading(false)
            }, 1000);
        }
    }, [setIsLoading, imgCount]);

    const [loginStatus, setLoginStatus] = useState(true);
    
    
    const handleClaim = async () => {
        if (!loginStatus) {
            toast.error("Please connect wallet correctly!");
            return;
        }
        const load_toast_id = toast.loading("Please wait for Claim Reward...");
        try {

           
        } catch (error) {
            toast.error("Claiming Failed!");
        }
        toast.dismiss(load_toast_id);
    }



    return (
        <div className="home" id="home">
            <img src="/assets/background-doodles.svg" alt="" className="back" onLoad = {onLoad}/>
            <div className="homeContent">
                <h1>Staking Its Just PEPE</h1>
                <div className="warpper" data-aos="fade-up">

                    <div className="calm">
                        <img src="/assets/bar_03.png" alt="" className="back" onLoad = {onLoad}/>
                        <h2><span className='gray'>REWARDS :</span> <span>{0}</span> $ PEP</h2>
                        <p>25 PEP for every 1 NFT Staked per 24 hour</p>
                        <button 
                            className="claimBtn button" 
                            disabled={!loginStatus} 
                            onClick={handleClaim}
                            style={{backgroundImage: `url("assets/button01.png")`}}
                        >CLAIM
                        </button>
                    </div>
                    <div className="statePart">
                        <div className="total">
                            <div className="leftContent">
                                <div className="stateItem">
                                    <img src="/assets/bar_05.png" alt="" className="back" onLoad = {onLoad}/>
                                    <p>TOTAL REWARDS</p>
                                    <h2><span>{0}</span> $ PEP</h2>
                                </div>

                            </div>
                        </div>
                        <div className="sub">
                            <div className="stateItem first">
                                <img src="/assets/bar_05.png" alt="" className="back" onLoad = {onLoad}/>
                                <p>24 Hours : {0}</p>
                                <h2><span>Stakers : </span> {0}</h2>
                                <h4>24 Hour lock up : <span>25</span> PEP</h4>
                            </div>
                            <div className="stateItem second">
                                <img src="/assets/bar_05.png" alt="" className="back" onLoad = {onLoad}/>
                                <p>1 Week : {0}</p>
                                <h2><span>Stakers : </span> {0}</h2>
                                <h4>1 Week lock up : <span>25</span> PEP + <span>25</span>% Bonus</h4>
                            </div>
                            <div className="stateItem third">
                                <img src="/assets/bar_05.png" alt="" className="back" onLoad = {onLoad}/>
                                <p>1 Month : {0}</p>
                                <h2><span>Stakers : </span> {0}</h2>
                                <h4>1 Month lock up : <span>25</span> PEP + <span>100</span>% Bonus</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
