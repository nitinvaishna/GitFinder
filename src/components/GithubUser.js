import React, { useState, createRef, useEffect } from 'react'
import UserCard from './UserCard'
import axios from 'axios';
import './component.css';

function GithubUser() {
    const[userData, setUserData] = useState({});
    const[name, setName] = useState('');
    const[error, setError] = useState('');

    const inputRef = createRef();

    const getUserInfo = () => {
        axios.get(`https://api.github.com/users/${name}`)
          .then((response) =>{
            setUserData(response.data);
          })
          .catch((err) => {
            if(err.response.status === 404){
                setError('User Not found');
            }
          });
          inputRef.current.value = '';
          setName('');
    }
    useEffect(() => {
        inputRef.current.focus();
    },[])
  return (
    <div className='github-wrapper'>
        <h1>Get github user data</h1>
        
        <input
            className='username-input'
            placeholder='Enter git name...'
            onChange={(e) => setName(e.target.value)}
            ref={inputRef}
        />
        <br/>
        <button className='info-btn' onClick={getUserInfo}>Get Info</button> 
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        <UserCard 
            userData={userData}/>
    </div>
  )
}

export default GithubUser