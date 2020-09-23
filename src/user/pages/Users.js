import React from "react";
import UserList from "../components/UserList";
const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "Huzaifa",
      places: 3,
      image: "https://picsum.photos/200/300",
    },
    { id: 2, name: "Malik", places: 3, image: "https://picsum.photos/200/300" },
    {
      id: 3,
      name: "Mohaimin",
      places: 3,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      name: "Huzaifa",
      places: 3,
      image: "https://picsum.photos/200/300",
    },
  ];
  return (
    <React.Fragment>
      <UserList items={USERS} />
    </React.Fragment>
  );
};
export default Users;
