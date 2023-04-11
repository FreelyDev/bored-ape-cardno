import './stakingCard.scss';
import Gallery from 'components/gallery';
import Loader from 'components/loader/Loader';
// import { BigNumber } from 'ethers';

type NftBoxProps = {
    nfts: number[]
    //nfts: BigNumber[]
    label ?: string
    isStaked?: boolean
    dataLoaded?: boolean
    OnStake?: () => void
    OnUnStake?: () => void
    selectdNftIds: string[]
    setSelectedNftIds?: (id: string[]) => void

};

export default function NftBox({ nfts, label, isStaked, dataLoaded, OnStake, OnUnStake, selectdNftIds, setSelectedNftIds }: NftBoxProps) {

    const handleSelect = (nftIds) => {
        setSelectedNftIds(selectdNftIds.concat(nftIds))
    }

    const handleDeselect = (nftIds) => {
        setSelectedNftIds(selectdNftIds.filter((nftId) => nftIds.indexOf(nftId) === -1))
    }
    const handleStake = () => {
        isStaked ? OnUnStake() : OnStake()
        handleDeselect(selectdNftIds)
    }

    return (
        <>
            <div className="item" data-aos="fade-right" style={{ backgroundImage: `url('assets/bar_01.png')` }}>

                <div className="itemHeader">
                    <h3>{`${isStaked ? `STAKED NFTs` : `HOLDING NFTs`}`} ({label})</h3>
                </div>
                {dataLoaded ?
                    <>
                        <div className="itemContent">
                            <div className="nftViews">
                                <Gallery
                                    nfts={nfts || []}
                                    label={label}
                                    selectedIds={selectdNftIds}
                                    onSelect={(nftIds) => handleSelect(nftIds)}
                                    onDeselect={(nftIds) => handleDeselect(nftIds)}
                                />
                                
                            </div>
                        </div>
                        <div className="itemFooter">
                            <p>{`YOU HAVE ${nfts.length} NFTS ${isStaked ? 'STAKED IN THIS POOL' : 'IN YOUR WALLET'}`}</p>
                        </div>
                        <div className="btns">
                            <button
                                disabled={selectdNftIds.length === 0}
                                className="stakeBtn button"
                                onClick={() => { handleStake() }}
                                style={{ backgroundImage: `url("assets/button03.png")` }}
                            >{isStaked ? 'UNSTAKE' : 'STAKE'} {selectdNftIds.length || ''}</button>

                        </div>
                    </> :
                    <div className="loadingPart">
                        <Loader />
                        <h3>Loading Data</h3>
                    </div>
                }
            </div>
        </>
    )
}
