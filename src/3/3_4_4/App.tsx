// 3_4_4 Clear an image while it’s loading
/*
  Когда вы нажимаете кнопку "Далее", браузер начинает загрузку следующего изображения. Однако, поскольку оно отображается в том же теге img, по умолчанию вы будете видеть предыдущее изображение, пока не загрузится следующее. Это может быть нежелательно, если важно, чтобы текст всегда совпадал с изображением. Измените это так, чтобы при нажатии кнопки "Next" предыдущее изображение сразу же убиралось.
*/

import { useState } from 'react';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const hasNext = index < images.length - 1;

  function handleClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  let image = images[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h3>
        Image {index + 1} of {images.length}
      </h3>
      <img src={image.src} />
      <p>
        {image.place}
      </p>
    </>
  );
}

let images = [{
  place: 'Penang, Malaysia',
  src: 'FJeJR8M.jpg'
}, {
  place: 'Lisbon, Portugal',
  src: 'dB2LRbj.jpg'
}, {
  place: 'Bilbao, Spain',
  src: 'z08o2TS.jpg'
}, {
  place: 'Valparaíso, Chile',
  src: 'Y3utgTi.jpg'
}, {
  place: 'Schwyz, Switzerland',
  src: 'JBbMpWY.jpg'
}, {
  place: 'Prague, Czechia',
  src: 'QwUKKmF.jpg'
}, {
  place: 'Ljubljana, Slovenia',
  src: '3aIiwfm.jpg'
}];
