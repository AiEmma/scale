import React from "react"
import Card from "../../components/Card/Card"
import {ListContainer} from "./styled";



const FirstPage = () => {
  const [users, setUsers] = React.useState([]);
  const request = async () => {
    const response = await fetch("https://reqres.in/api/users/");
    const js = await response.json();
    setUsers(js.data);
    
  };
  React.useEffect(() => {
    request();
  }, [])

const usuarioCards = users.map((user) =>{
  
 return (
  
   <Card 
      key={user.id}
      first_name={user.first_name}
      avatar={user.avatar}
      email={user.email}
   />
   
 )


})
return (
  <ListContainer>{usuarioCards}</ListContainer>
)
}


export default FirstPage