import { getUsers } from "@/apis/Admin/Services/Services";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { LoaderIcon, PhoneCall } from "lucide-react";

const Dashboard = () => {
  //   const [user, setUser] = useState([]);
  //   console.log(user);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((data) => setUser(data));
  //   }, []);

  const {
    data: users,
    isError,
    isLoading,
  } = useQuery({
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
  });
  if (isLoading) {
    return <p className="flex justify-center items-center h-screen gap-2"><LoaderIcon></LoaderIcon> Loading</p>;
  }
  if (isError) {
    return <p>someting went wrong</p>;
  }
  console.log(users.name);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3  gap-2 p-2">
      {" "}
      {users.map((user) => (
        <Card key={user.id} className="text-sm overflow-auto">
          <CardHeader>
            <CardTitle>{user.name}</CardTitle>
            <CardDescription>{user.email}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>User Name: {user.userName}</p>
            <p > <PhoneCall className="inline-block" size={20} /> Phone: {user.phone}</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Dashboard;
