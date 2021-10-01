import React from 'react'
import { NFT_LIST } from '../lib/constants';
import {Card} from './Card';

const Gallery = () => {
    ;
    return (
      <div className="gallery">
       {NFT_LIST.map((nft) => <Card id={nft.id} ></Card>)}
      </div>
    );
}

export default Gallery
