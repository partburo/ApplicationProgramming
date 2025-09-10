// 1_7_1 Splitting a list in two 
/*
  В этом примере показан список всех людей.

  Измените его, чтобы последовательно вывести два отдельных списка: Химики и Все остальные. Как и ранее, вы можете определить, является ли человек химиком, проверив, что person.profession === 'chemist'.
*/

import { people } from './data.js';
import { getImageUrl } from './utils.js';

export type Person = {
  id: number;
  name: string;
  profession: string;
  accomplishment: string;
  imageId: string;
}

function People({title, people}: {title: string, people: Person[]}) {
  return(
    <div>
        <h2>{title}</h2>
        <ul>
            {people.map(person => (
                <li key={person.id}>
                    <img src={getImageUrl(person)} alt={person.name}/>
                    <p>
                      <b>{person.name}: </b>
                      {person.profession} known for {person.accomplishment}
                    </p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default function List() {
    const chemists = people.filter(p => p.profession === 'chemist')
    const others = people.filter(p => p.profession !== 'chemist')

    return (
        <article>
            <h1>Scientists</h1>
            <People title="Chemists" people={chemists}/>
            <People title="Other scientists" people={others}/>
        </article>
    );
}
