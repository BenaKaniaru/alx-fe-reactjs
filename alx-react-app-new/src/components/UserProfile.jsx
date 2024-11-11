import React from "react";

cont

function UserProfile({ persons }) {

  
  return (
    <div>
      <ul>
        {persons.map((person) => {
          <li>
            {person.name} {person.bio} {person.age} {person.emoji}
          </li>;
        })}
      </ul>
    </div>
  );
}

export default UserProfile;
