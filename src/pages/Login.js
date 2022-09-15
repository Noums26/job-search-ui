import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDataProvider } from '../provider/DataProvider';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userDetails, setUserDetails] = useState({});

    const { login } = useDataProvider()
    const navigate = useNavigate();

    const verify = () => {
        if (username !== "" || password !== "") {
            login(username, password).then((res) => {
                if(res !== null || res !== undefined){
                    setUserDetails(res)
                } else {
                    setUserDetails({})
                }
            })

            console.log(userDetails)
            localStorage.setItem('role', userDetails.role)
            localStorage.setItem('name', userDetails.name)
            localStorage.setItem('id', userDetails.id)

            userDetails && navigate('/offers')
        }        
    }

    return (
        <div>
            <form className='w-50 my-5 py-5 mx-auto'>
                <div className="form-group">
                    <label for="exampleInputEmail1">Nom d'utilisateur</label>
                    <input type="text" className="form-control" name='username' placeholder='username' onChange={e => {setUsername(e.target.value)}} />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Mot de passe</label>
                    <input type="password" className="form-control" name='password' placeholder='password' onChange={e => {setPassword(e.target.value)}} />
                </div>
                
                <button type="submit" className="btn btn-primary" onClick={e => verify()}>Se Connecter</button>
            </form>
        </div>
    );
};

export default Login;