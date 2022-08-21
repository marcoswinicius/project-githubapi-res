import React, { useState} from "react";
import { Form } from "semantic-ui-react"
import DisplayTable from "./Display";
import '../App.css'




const Profile = () => {
    const [data, setData] = useState ({});
    const [username, setUsername] = useState ("");
    const [repositories, setRepositories] = useState ([]);

    const onChangeHandler = e => {
        setUsername(e.target.value);
      };

    const submitHandler = async e => {
        e.preventDefault();

        const profile = await fetch(`https://api.github.com/users/${username}`);
        const profileJson = await profile.json();
        // console.log(profileJson);

        const repositories = await fetch(profileJson.repos_url);
        const repoJson = await repositories.json();
        console.log(repoJson);

       if (profileJson) {
        setData(profileJson);
        setRepositories(repoJson);
       }

    };

    
    return ( 
        <div className="container">
              
        <div className="s_form">
            
            <div>
        <Form >
          <Form.Group className="form_group">
          <div className="img-img">
            <img src="https://logosmarcas.net/wp-content/uploads/2020/12/GitHub-Logo.png" alt="" />
            </div>
            <Form.Input
              placeholder='Buscar usuário github..'
              name='name'
              type="text"
              value={username}
              onChange={onChangeHandler}
            />           
            <Form.Button className="btn" content='Enviar' type="submit" onClick={submitHandler}  />
          </Form.Group>
        </Form>
        </div> 
        </div> 

        <DisplayTable data={data} repositories={repositories}/>
           
        </div>   
    );
}

export default Profile;