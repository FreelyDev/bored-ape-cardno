import './gallery.scss'
import { useRef, useState } from "react";
import useDraggableScroll from 'use-draggable-scroll';
import Loader from 'components/loader/Loader';
// import { BigNumber } from 'ethers';

type GalleryProps = {
    nfts: number[]
    //nfts: BigNumber[]
    selectedIds: string[]
    label: string
    onSelect(nftIds: string[]): void
    onDeselect(nftIds: string[]): void
};

export default function Gallery({ nfts, selectedIds, label, onSelect, onDeselect }: GalleryProps): JSX.Element {
    const ref = useRef(null);
    const { onMouseDown } = useDraggableScroll(ref, { direction: 'horizontal' });
    const [loadedCount, SetLoadedCount] = useState(0)
    const [allImgLoaded, setAllImgLoaded] = useState(false)
    const isAllSelected = nfts.length > 0 && nfts.filter((nft) => selectedIds.indexOf(nft.toString()) === -1).length === 0

    const handleLoading = function () {
        SetLoadedCount(loadedCount + 1)
        if (loadedCount + 1 === nfts.length) {
            setAllImgLoaded(true)
        }
    };

    const handleClick = (isSelected, nftId: string) => {
        if (isSelected) {
            onDeselect([nftId])
        } else {
            onSelect([nftId])
        }
    }

    const handleAllClick = () => {
        const tokenIds = nfts.map((nft) => nft.toString())
        if (isAllSelected) {
            onDeselect(tokenIds)
        } else {
            onSelect(tokenIds)
        }
    }

    return (
        <div className="gallery">
            <div className="top">
                <p>{label} : {nfts.length}</p>
                <button
                    disabled={!isAllSelected && nfts.length === 0}
                    onClick={handleAllClick}
                    // style={{ border: !isAllSelected ? '1px #008AFC solid' : '1px #65b8fc solid' }}
                >{!isAllSelected ? 'Select All' : 'UnSelect All'}</button>
            </div>
            
            <div className="imgContent">
                {nfts.length === 0?
                    <div className="noNFT">
                        <p>No NFTs in this rarity</p>
                    </div>
                    :
                    <div className={!allImgLoaded ? "img_loader" : "img_loader imgDone"}>
                        <Loader />
                    </div>
                }

                <div className={!allImgLoaded ? "slideView" : "slideView done"} onMouseDown={onMouseDown} ref={ref}>
                    <div className="slideList">
                        {nfts.map((nft) => {
                            const isSelected = selectedIds.indexOf(nft.toString()) > -1;
                            const imgUrl = `/assets/nft_0${nft}.png`
                            return <div className={isSelected ? "sideImg selected" : "sideImg"}
                                onClick={() => { handleClick(isSelected, nft.toString()) }}
                                key={`nft${nft.toString()}`}
                            >
                                <div className="imgContainer">
                                    <img src={imgUrl} alt="" onLoad={handleLoading} />
                                    <p className="tokenID"># {nft.toString()}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

