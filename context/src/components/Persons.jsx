
import { Link } from "react-router-dom";
import datas from "../assets/personalData.json";
import { useContext } from "react";
import { PersonContext } from "../context/PersonalinfoContext";

const Persons = () => {
  const { dispatch } = useContext(PersonContext);

  const handlePersonClick = (person) => {
    dispatch({ type: "SET_PERSON", payload: person }); // Set the selected person
  };

  return (
    <div>
      <h1>Personal Information</h1>
      <ul>
        {datas.map((person) => (
          <li key={person.id}>
            <Link to="/info/details" onClick={() => handlePersonClick(person)}>
              {person.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Persons;







// import { Link } from "react-router-dom";
// import data from '../assets/personalData.json'

// const Persons = () => {
//   return (
//     <div>
//       <h1>Personal Information</h1>
//       <ul>
//         {data.map((person) => (
//           <li key={person.id}>
//             <Link to={`/info/details/${person.id}`}>{person.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Persons
