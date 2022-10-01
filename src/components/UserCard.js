import React from 'react'

function UserCard(props) {
    if(Object.keys(props.userData).length < 1){
        return <h3>Enter the name</h3>
    }

    let { avatar_url, name, blog, location, public_repos,html_url } = props.userData;

    console.log(props.userData);
  return (
    <div className='user-wrapper'>
        
            <img src= {avatar_url}></img>
            <h3>{name}</h3>
            <p>Blog link: <a href={blog}>{blog}</a></p>
            <p>Location: <b>{location}</b></p>
            <p>Public repos: <a href={blog}><b>{public_repos}</b></a></p>
            <p>html_url: <a href={html_url}><b>{html_url}</b></a></p>
    </div>
  );
};

export default UserCard