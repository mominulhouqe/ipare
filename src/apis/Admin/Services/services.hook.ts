import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./Services";

export const useGetUsers =()=>{
    const usersData = useQuery({
        queryKey: ["service"],
        queryFn: getUsers,
        select: (data) => {
          const users = data.data.map((user) => ({
            id: user.id,
            name: user.name,
            userName: user.username,
            email: user.email,
            phone: user.phone,
          }));
          return users;
        },
      })
      return usersData;
}