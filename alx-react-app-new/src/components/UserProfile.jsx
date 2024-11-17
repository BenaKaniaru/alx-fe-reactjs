import React from "react";

function UserProfile(props) {
  // const { persons } = props;
  return (
    <div style={{ border: "1px solid green", padding: "10px", margin: "10px" }}>
      <ul>
        {props.persons.map((person) => {
          return (
            <div key={person.name}>
              <h2 style={{ color: "blue" }}>{person.name}</h2>
              <p>
                Age: <span style={{ fontWeight: "bold" }}>{person.age}</span>
              </p>
              <p>Bio: {person.bio}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default UserProfile;
