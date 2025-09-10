import { Person } from './App.js';
import Panel from './Panel.js';
import { getImageUrl } from './utils.js';

//let currentPerson: Person

export default function Profile({ person }: { person: Person }) {
    //currentPerson = person;
    return (
        <Panel>
            <Header person={person}/>
            <Avatar person={person}/>
        </Panel>
    );
}

function Header({person}: {person: Person}) {
    return <h1>{person.name}</h1>;
}

function Avatar({person}: {person: Person}) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={50}
            height={50}
        />
    );
}