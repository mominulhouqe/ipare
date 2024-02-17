import { getUsers } from "@/apis/Admin/Services/Services";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  //   const [user, setUser] = useState([]);
  //   console.log(user);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((data) => setUser(data));
  //   }, []);




  const { data, isError, isLoading } = useQuery({
    queryKey: ["service"],
    queryFn:  getUsers,
  });
  if (isLoading) {
    return <p>Loading</p>;
  }
// console.log({data});

  return <div className="bg-green-300">
    {
        data.map((user) =>(
            <div key={user.id}>
                {user.name}
            </div>
        ))
    }
  </div>;
};

export default Dashboard;
