import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  const styles = {
    border: "1px solid black",
    padding: "5px",
    margin: "10px auto"
  };

  const getData = () => {
    return fetch(`https://reqres.in/api/users`).then((res) => res.json());
  };

  const getuserData = async () => {
    setLoading(false);
    try {
      let res = await getData();
      let data = await res.data;
      setUserData(data);
      setLoading(true);
    } catch (error) {
      setErr(true);
    }
  };

  useEffect(() => {
    getuserData();
  }, []);

  return !loading ? (
    <h2>Loading, One sec...</h2>
  ) : err ? (
    <h2>Oops.. Something went wrong</h2>
  ) : (
    <div>
      {userData &&
        userData.map(({ id, email, first_name, last_name, avatar }) => {
          return (
            <div style={styles} key={id}>
              <img src={avatar} alt={first_name} />
              <h3>
                Name - {first_name} {last_name}
              </h3>
              <b>Email : {email}</b>
              <br />
              <Link to={`/users/${id}`}>More Info</Link>
            </div>
          );
        })}
    </div>
  );
};
export default Users;
