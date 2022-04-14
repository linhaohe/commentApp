import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {ImageList,ImageListItem,ImageListItemBar} from "@material-ui/core";

function albumsPage(){
    const [albums,setAlbums] = useState({data:[],isFetch:false});

    const params = useParams();
    useEffect(() => {
        fetchAlbums();
    },[])

    const fetchAlbums = async () =>{
        await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${params.id}`)
        .then(res => {
            if(res.ok){
                return res.json();
            }
                throw new Error("Incorrect URL");
            }
        )
        .then(json => {
            setAlbums({data : json , isFetch:true})
        })
        .catch(err => console.error(err));
    };
    if(!albums.isFetch){
        return <h1>Loading ...</h1>
    }

    return <ImageList>
        {albums.data.map(cur => (<ImageListItem key={cur.url}>
            <img src={`${cur.url}`} loading="lazy"/>
            <ImageListItemBar title={cur.title}/>
                
        </ImageListItem>))}
    </ImageList>
}

export default albumsPage;