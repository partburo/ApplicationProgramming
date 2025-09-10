// 2_2_1 Complete the gallery 
/*
  При нажатии кнопки "Next" на последней скульптуре происходит сбой кода. Исправьте логику, чтобы предотвратить сбой. Вы можете сделать это, добавив дополнительную логику в обработчик события или отключив кнопку, когда действие невозможно.

  После устранения сбоя добавьте кнопку "Предыдущая", которая показывает предыдущую скульптуру. Она не должна разбиваться на первой скульптуре.
*/

import { useState } from 'react';
import { sculptureList } from './data';


export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handlePreviousClick() {
        if (index > 0)
            setIndex(index - 1)
    }

    function handleNextClick() {
        if (index < sculptureList.length - 1)
            setIndex(index + 1);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handlePreviousClick}>Previous</button>
            <button onClick={handleNextClick}>Next</button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img src={sculpture.url} alt={sculpture.alt} />
        </>
    );
}