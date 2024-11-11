import UserProfile from "./UserProfile";
import Fruits from "./Fruits";

function Practice() {
  const persons = [
    {
      name: "Alice",
      age: 25,
      bio: "Loves hiking and photography",
      emoji: "🤦‍♀️",
    },

    {
      name: "John",
      age: 27,
      bio: "Loves Football and photography",
      emoji: "👨",
    },

    {
      name: "Jane",
      age: 22,
      bio: "Loves God and Praying",
      emoji: "👧",
    },
  ];

  return (
    <main>
      <UserProfile />
      <Fruits />
    </main>
  );
}
