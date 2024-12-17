import { useState } from "react";
export default function Search() {
  const [user, setUser] = useState("");

  return (
    <div>
      <input
        type="text"
        name="usersearch"
        value={user}
        placeholder="search"
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
    </div>
  );
}
