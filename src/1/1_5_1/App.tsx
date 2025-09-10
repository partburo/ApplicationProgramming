// 1_5_1 Extract a component
/* 
  Компонент Gallery содержит очень похожую разметку для двух профилей. Извлеките из него компонент Profile, чтобы уменьшить дублирование кода. Для этого нужно будет определить props для компонента Profile.
*/

import { getImageUrl } from "./util";

type AvatarProps = {
  id: string
  width: number
  height: number
}

type ProfileProps = {
  name: string
  profession: string
  awards: string[]
  discovered: string
  avatar: AvatarProps
}

function Profile({name, profession, awards, discovered, avatar}: ProfileProps){
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(avatar.id)}
        alt={name}
        width={avatar.width}
        height={avatar.height}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>(
          {awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        avatar={{id: "Maria", width: 70, height: 70}}
        profession="physicist and chemist"
        discovered="polonium (chemical element)"
        awards={[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal",
          "Matteucci Medal"
        ]}
      />
      <Profile
        name="Katsuko Saruhashi"
        avatar={{id: "KatsukoSaruhashi", width: 70, height: 70}}
        profession="geochemist"
        discovered="a method for measuring carbon dioxide in seawater"
        awards={[
          "Miyake Prize for geochemistry",
          "Tanaka Prize"
        ]}
      />
    </div>
  );
}
