import React from "react";
import { Card , CardContent, Box, Typography,Link } from "@material-ui/core";

function userProfile({data}){
    const {id,name,email,address,phone,website,company} = data;
    return (
    <Box sx={{minWidth: 480}}>
        <Card variant="outlined">
            <CardContent>
                <Typography>id: {id}</Typography>
                <Typography>Name: {name}</Typography>
                <Typography>Email: {email}</Typography>
                <Typography>Address: {address.street + "," +address.city + "," + address.zipcode}</Typography>
                <Typography>Phone: {phone}</Typography>
                <Typography>Website : <Link href = {website} outline = "none">{website}</Link></Typography>
                <Typography>Company : {company.name}</Typography>

            </CardContent>
        </Card>
    </Box>
    )
}

export default userProfile;