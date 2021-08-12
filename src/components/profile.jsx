import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = ({id}) => {
    const [userData, setUserData] = useState(null);
    
    const getUser = async id =>{
        try{
            await axios.get(
                `https://jsonplaceholder.typicode.com/users/1`
            ).then(res=>setUserData(res.data))


        }catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        getUser(id);
    },[id])

    return(
        <div>
            {!userData ? (<h1> 로딩중</h1>) : (<><h1>UserName : {userData.name}</h1>
            <h1>Email :{userData.email}</h1></>)}
            
        </div>
    )
}
export default Profile;