// 4_2_3 Scrolling an image carouse
/*
  Эта карусель изображений имеет кнопку "Next", которая переключает активное изображение. Заставьте галерею прокручиваться горизонтально до активного изображения по щелчку. Для этого нужно вызвать scrollIntoView() на DOM-узле активного изображения:
  
  node.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center',
  });
*/
import { useEffect, useRef, useState } from 'react';

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  const imageRefs = useRef<HTMLImageElement[]>([])

  useEffect(() => {
    let currentImage = imageRefs.current[index]
    if (currentImage) {
      currentImage.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })
    }
  }, [index])

  return (
    <>
      <nav>
        <button onClick={() => {
          if (index < catList.length - 1) {
            setIndex(index + 1);
          } else {
            setIndex(0);
          }
        }}>
          Next
        </button>
      </nav>
      <div style={{overflow: 'auto', whiteSpace: 'nowrap'}}>
        <ul>
          {catList.map((cat, i) => (
            <li key={cat.id}>
              <img
                ref={e => imageRefs.current[i] = e!}
                className={
                  index === i ?
                    'active' :
                    ''
                }
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

type PlaceType = {
  id: number;
  imageUrl: string;
}

const catList: PlaceType[] = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: `cat${i}.jpg`
  });
}

