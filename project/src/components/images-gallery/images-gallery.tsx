
import React from 'react';

type ImagesGalleyProps = {
  images: string[],
}

function ImagesGallery ({images}: ImagesGalleyProps): JSX.Element {
  return (
    <React.Fragment>
      {images.map((image, index) => {
        const key = `${image}key${index}`;
        return (
          <div key={key} className="property__image-wrapper">
            <img className="property__image" src={image} alt="Photo" />
          </div>
        );}
      )}
    </ React.Fragment>
  );
}

export default ImagesGallery;
