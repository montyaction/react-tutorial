import React from 'react'

const user = {
  name: "Hardy Sandhu",
  imageUrl:"https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h3>Profile</h3>
      <h1>{user.name}</h1>
      <img 
        className="avatar" 
        src={user.imageUrl} 
        alt={"Photo of " + user.name} 
        style={{
            width : user.imageSize,
            height : user.imageSize 
        }}
        />
    </>
  );
}
