import { useContext } from "react";
import { PersonContext } from "../context/PersonalinfoContext";

const InformationDetails = () => {
  const { state } = useContext(PersonContext);
  const person = state.selectedPerson;

  if (!person) {
    return <p>Please select a person from the list.</p>;
  }

  return (
    <div>
      <h1>Nane {person.name}</h1>
      <p><strong>Age:</strong> {person.age}</p>
      <p><strong>Place of Birth:</strong> {person.pob}</p>
    </div>
  );
};

export default InformationDetails;

// import React from "react";
// import { useParams } from "react-router-dom";
// import data from '../assets/personalData.json'

// const InformationDetails = () => {
//   const { id } = useParams();
//   const person = data.find((p) => p.id === parseInt(id));

//   if (!person) return <p>Person not found.</p>;

//   return (
//     <div>
//       <h1>Details for {person.name}</h1>
//       <p><strong>Age:</strong> {person.age}</p>
//       <p><strong>Place of Birth:</strong> {person.pob}</p>
//     </div>
//   );
// };

// export default InformationDetails;

