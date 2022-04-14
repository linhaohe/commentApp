import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import UserProfile from "./userProfile";
import PostTable from "./postTable";
import AlbumsTable from "./albumsTable";

function userPage(){
    const [userData,setUserData] = useState({data : [], isFetch: false});
    const [userPost,setuserPost] = useState({data : [], isFetch: false});
    const [userAlbums,setuserAlbums] = useState({data : [], isFetch: false});


    const params = useParams();

    useEffect(() => {
        fetchUserData();
        fetchPost();
        fetchUserAlbums();
    },[]);

    const fetchUserData = async () =>{
        await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .then(res => {
            if(res.ok){
                return res.json();
            }
                throw new Error("Incorrect URL");
            }
        )
        .then(json => {
            setUserData({data : json , isFetch:true})
        })
        .catch(err => console.error(err));
    };

    const fetchPost = async () =>{
        await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}/posts`)
        .then(res => {
            if(res.ok){
                return res.json();
            }
                throw new Error("Incorrect URL");
            }
        )
        .then(json => {
            setuserPost({data : json , isFetch:true})
        })
        .catch(err => console.error(err));
    };

    const fetchUserAlbums = async () =>{
        await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${params.id}`)
        .then(res => {
            if(res.ok){
                return res.json();
            }
                throw new Error("Incorrect URL");
            }
        )
        .then(json => {
            setuserAlbums({data : json , isFetch:true})
        })
        .catch(err => console.error(err));
    };
    if(!userData.isFetch || !userPost.isFetch || !userAlbums.isFetch){
        return <h1>Loading ...</h1>
    }
    return <div>
        <UserProfile data = {userData.data}/>
        <PostTable data = {userPost.data}/>
        <AlbumsTable data = {userAlbums.data}/>
    </div>
}

export default userPage;