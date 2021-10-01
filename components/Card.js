import React from "react";
import { useZNFT, useNFTMetadata } from "@zoralabs/nft-hooks";
import { MediaConfiguration, NFTPreview } from "@zoralabs/nft-components";

export const Card = ({ id }) => {
  return (
    <div className="card">
      <NFTPreview id={id} />
    </div>
  );
};
