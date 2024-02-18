// export const getUsers = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/user").then(
//     (res) => res.json()
//   );
//   if (!res.success) {
//     throw new Error("something went wrong");
//   }
//   return res;
// };

import axios from "axios";

export const getUsers = async () => {
  return await axios.get("https://jsonplaceholder.typicode.com/users");
};
