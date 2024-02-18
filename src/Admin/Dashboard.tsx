
import { useGetUsers } from "@/apis/Admin/Services/services.hook";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoaderIcon, PhoneCall, Workflow } from "lucide-react";

const Dashboard = () => {
  //   const [user, setUser] = useState([]);
  //   console.log(user);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((data) => setUser(data));
  //   }, []);

  const { data: users, isError, isLoading } = useGetUsers();
  if (isLoading) {
    return (
      <p className="flex justify-center items-center h-screen gap-2">
        <LoaderIcon></LoaderIcon> Loading
      </p>
    );
  }
  if (isError) {
    return <p><Workflow /> someting went wrong</p>;
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
            <p>
              {" "}
              <PhoneCall className="inline-block" size={20} /> Phone:{" "}
              {user.phone}
            </p>
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
