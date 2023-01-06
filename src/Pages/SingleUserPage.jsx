import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleUserPage() {
  let myParams = useParams();
  let { user_id } = myParams;

  /* consoling the myParams we retrieve some id related to that particular user, 
  and base on this id we will fetch the new Data
  console.log(myParams);
  console.log(myParams.user_id) 
  +=> `user_id` is coming from route -
  <Route path="/users/:user_id" element={<SingleUserPage />} /> */

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const getData = () => {
    return fetch(`https://reqres.in/api/users/${user_id}`).then((res) =>
      res.json()
    );
  };

  const getAndSetData = async () => {
    setLoading(false);
    try {
      let data = await getData();
      setUser(data);
      setLoading(true);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAndSetData();
  }, []);

  return !loading ? (
    <h1>Just a sec...</h1>
  ) : (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "20px auto",
        width: "fit-content"
      }}
    >
      <img src={user?.data?.avatar} alt={user?.data?.first_name} />
      <br />
      <b>
        Name : {user?.data?.first_name} {user?.data?.last_name}
      </b>
      <br />
      <p>Email : {user?.data?.email}</p>
      <br />
      <hr />
      <br />
      <p>
        {" "}
        <a href={user?.support?.url}>Support Us</a>
      </p>
      <p>
        <i>{user?.support?.text}</i>
      </p>
    </div>
  );
}
export default SingleUserPage;
