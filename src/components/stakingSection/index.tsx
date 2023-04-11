import { useEffect, useState } from 'react';
import './stakingSection.scss';
import StakingCard from 'components/stakingCard';
import toast from 'react-hot-toast';

type LoadingType = {
    setIsLoading?(flag: boolean): void;
};

export default function SeasonSection({ setIsLoading }: LoadingType) {

    const [imgCount, setImgCount] = useState(0);
    const onLoad = () => {
        setImgCount(imgCount + 1)
    }
    useEffect(() => {
        if (imgCount >= 1) {
            setTimeout(() => {
                setIsLoading(false)
            }, 1000);
        }
    }, [setIsLoading, imgCount]);

    // ======  selected ID list ======== by XU 
    const [selectedCurrentNFTList_1, setSelectedCurrentNFTList_1] = useState([])
    const [selectedCurrentNFTList_2, setSelectedCurrentNFTList_2] = useState([])
    const [selectedCurrentNFTList_3, setSelectedCurrentNFTList_3] = useState([])

    // ========= selected ID list =========  by XU
    const [selectedStakedNFTList_1, setSelectedStakedNFTList_1] = useState([])
    const [selectedStakedNFTList_2, setSelectedStakedNFTList_2] = useState([])
    const [selectedStakedNFTList_3, setSelectedStakedNFTList_3] = useState([])

    // const [stakeReward, setStakeReward] = useState(0.00);

    const [isLoadedCurrentNFTList, setIsLoadedCurrentNFTList] = useState(true);
    const [isLoadedStakedNFTList, setIsLoadedStakedNFTList] = useState(true);

    const [loginStatus, setLoginStatus] = useState(true);
    

    const stakeSelectedNFT = async () => {
        console.log(selectedCurrentNFTList_1)

        if (!loginStatus) {
            toast.error("Please connect wallet correctly!");
            return;
        }

        if (selectedCurrentNFTList_1.length <= 0) {
            toast.error("Selcted NFT count should be over than 0");
            return;
        }

        const load_toast_id = toast.loading("Please wait for Staking...");
        try {

            
        } catch (error) {
            toast.error("Staking Failed!");
        }
        toast.dismiss(load_toast_id);

    }

    const unstakeSelectedNFT = async () => {
        console.log(selectedStakedNFTList_1)

        if (!loginStatus) {
            toast.error("Please connect wallet correctly!");
            return;
        }

        if (selectedStakedNFTList_1.length <= 0) {
            toast.error("Selcted NFT count should be over than 0");
            return;
        }

        const load_toast_id = toast.loading("Please wait for Unstaking...");
        try {
            
           
        } catch (error) {
            toast.error("Unstaking Failed!");
        }
        toast.dismiss(load_toast_id);
    }

    return (
        <>
            <div className="seasonSection">
                <img src="/assets/background zebra.svg" alt="" className="back" onLoad = {onLoad}/>
                <div className="scroll" />
                <div className="seasonContent" >
                    <h1 data-aos="fade-up">Staking</h1>

                    {!loginStatus ?
                        <div className="wrapper" >
                            <div className="noneWallet" data-aos="fade-up" style={{ backgroundImage: `url("assets/bar_05.png")` }}>
                                <h1>Please connect wallet</h1>
                            </div>
                        </div>:
                        <>
                            <div className="wrapper" >
                                <StakingCard
                                    // nfts_mystic={stakingEngineDetail?.currentNFTList_Mystic || []}
                                    nfts={[1, 2, 3, 4, 5, 6, 7, 8]}
                                    label = {'24 Hours'}
                                    dataLoaded={isLoadedCurrentNFTList}

                                    selectdNftIds={selectedCurrentNFTList_1}
                                    setSelectedNftIds={setSelectedCurrentNFTList_1}
                                    OnStake={stakeSelectedNFT}
                                />

                                <StakingCard
                                    //nfts_mystic={stakingEngineDetail?.stakedNFTList_Mystic || []}
                                    nfts={[1, 2, 3]}
                                    label = {'24 Hours'}
                                    dataLoaded={isLoadedStakedNFTList}
                                    isStaked

                                    selectdNftIds={selectedStakedNFTList_1}
                                    setSelectedNftIds={setSelectedStakedNFTList_1}
                                    OnUnStake={unstakeSelectedNFT}
                                />
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}



