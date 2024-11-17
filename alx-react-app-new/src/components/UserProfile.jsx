import React from "react";

function UserProfile(props) {
  // const { persons } = props;
  return (
    <div style={{ border: "1px solid green", padding: "10px", margin: "10px" }}>
      <ul>
        {props.persons.map((person) => {
          return (
            <li style={{ color: "blue" }}>
              {person.name} {person.bio} {person.age} {person.emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UserProfile;
