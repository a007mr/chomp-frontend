import React from 'react';
import Image from 'next/image';
import EthIcon from './EthIcon';
import LoadingIcon from './Loading';
import DotsIcon from './DotsIcon';

export default function NftCard({ nft, mintLoading, onMint, isUserNfts, mintIndex, index }) {

  const formattedDots = parseFloat(nft.dotsPrice).toLocaleString('en-US');
  const formattedUssiance = nft.maxIssuance > 0 ? parseFloat(nft.maxIssuance).toLocaleString('en-US') : 0;
  const leftToMint = nft.maxIssuance - nft.totalSupply
  const formattedLeftToMint = leftToMint > 0 ? parseFloat(leftToMint).toLocaleString('en-US') : 0;

  return (
    // <div key={nft.tokenId} className="w-full flex bg-black shadow rounded-[19px] p-[20px] border border-primary flex-col items-center">
    <div key={nft.tokenId} className="border__card w-full  bg-black shadow flex flex-col items-center">
      <div className="border__card__content">
      <div className="h-[443px] w-full overflow-hidden rounded-[10px]">
        <Image 
          src={nft.image}
          alt="NFT" 
          width="356" height="443"
          className="w-full h-full object-cover"
        />
      </div>

      {!isUserNfts ? (
        <>
          <div className="w-full flex flex-row items-start justify-between my-[19px]">
            <div className="w-[45%] flex flex-col justify-start">
              <p className="text-[17px] font-bold text-white text-left mb-[7px]">{nft.name}</p>
              <p className="text-[14px] text-white text-left">{formattedUssiance} supply</p>
            </div>
            <div className="w-[55%] flex flex-col justify-end">
              <div className="flex flex-row items-center justify-end mb-[7px]">
                <p className="text-[17px] ml-1 mr-2 font-medium text-orange text-right flex flex-row items-center"><span className='mr-2'><DotsIcon/></span> {formattedDots} DOTS</p>
                <EthIcon/>
                <p className="text-[17px] font-medium text-white text-right">{nft.ethPrice}</p>
              </div>
              <p className="text-[14px] text-white text-right">{formattedLeftToMint} left to mint</p>
            </div>
          </div>
          
          <div className={`${nft.maxIssuance !== nft.totalSupply ? 'border__button' : ''} w-full text-[17px]`}>
            <button 
              onClick={() => onMint(nft.tokenId, 1, index)} 
              disabled={nft.maxIssuance === nft.totalSupply ? true : false} 
              className={`w-full h-[50px] text-[17px] shadow-xl flex flex-row items-center justify-center font-bold text-white uppercase ${nft.maxIssuance === nft.totalSupply ? 'bg-btnDisabled text-white' : 'border__button__content'}`}
            >
              <div className={`${!mintLoading || nft.maxIssuance === nft.totalSupply ? 'border__button__text' : 'flex flex-row items-center'}`}>
                  {nft.maxIssuance === nft.totalSupply ? 'Sold Out' : mintLoading && mintIndex === index ?
                   (
                    <>
                      <LoadingIcon className="mr-2 h-8 w-8 animate-spin" color="text-white" />
                      Pending...
                    </>
                  ) : 'Mint'}
              </div>
            </button> 
          </div>
        </>
      ) : (
        <div className="w-full flex flex-row items-start justify-center mt-[19px] mb-[8px]">
          <p className="text-[17px] font-bold text-white text-left">{nft.name}</p>
        </div>
      )}
      </div>
    </div>
  );
}
