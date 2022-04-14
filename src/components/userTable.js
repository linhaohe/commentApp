import React,{useState, useEffect, useMemo} from "react";
import { Paper,TableBody,Table,TableCell,TableContainer,TableHead,TableRow } from "@material-ui/core";

import UserRow from "./userRow";

function userList(){
    const [userData,setUserData] = useState({data : [], isFetch: false});

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () =>{
        await fetch("https://jsonplaceholder.typicode.com/users")
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
    }

    const memoList = useMemo(() => userData.data.map( cur => (
            <UserRow key = {cur.name} id = {cur.id} name = {cur.name} username = {cur.username} email = {cur.email} />
    )),[userData]);


    if(!userData.isFetch){
        return (
            <h1>Loading ...</h1>
        );
    }
    return (
        <TableContainer component={Paper}>
            <Table sx = {{minWidth : 480}}>
                <TableHead>
                    <TableRow>
                        <TableCell style={{"fontWeight":"bold"}}>
                            Name
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {memoList}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default userList;

