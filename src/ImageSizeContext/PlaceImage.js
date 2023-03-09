import React, { useContext } from "react";
import { ImageSizeContext } from "./Context";
import getImageUrl from "./utils/getImageUrl";

function PlaceImage({ place }) {
  const imageSize = useContext(ImageSizeContext);

  return (
    <img
      src={getImageUrl(place.imageId)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}

export default PlaceImage;
