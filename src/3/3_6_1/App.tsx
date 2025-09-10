// 3_6_1  Replace prop drilling with context
/*
  В этом примере переключение флажка изменяет параметр imageSize, передаваемый каждому <PlaceImage>. Состояние флажка хранится в компоненте верхнего уровня App, но каждый <PlaceImage> должен знать об этом.

  В настоящее время App передает imageSize в List, который передает его в каждое Place, которое передает его в PlaceImage. Удалите пропс imageSize, и вместо этого передавайте его из компонента App непосредственно в PlaceImage.

  Вы можете объявить контекст в файле Context.js.
*/

import { useState } from 'react';
import { places, PlaceType } from './data';
import { getImageUrl } from './utils';

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List imageSize={imageSize} />
    </>
  )
}

function List({ imageSize }: { imageSize: number }) {
  const listItems = places.map(place =>
    <li key={place.id}>
      <Place
        place={place}
        imageSize={imageSize}
      />
    </li>
  );
  return <ul>{listItems}</ul>;
}

function Place(
  { place, imageSize }: 
  { place: PlaceType, imageSize: number }
) {
  return (
    <>
      <PlaceImage
        place={place}
        imageSize={imageSize}
      />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

function PlaceImage(
  { place, imageSize }:
    { place: PlaceType, imageSize: number }
) {
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
