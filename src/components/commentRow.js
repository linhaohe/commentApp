import React,{useState} from "react";
import {
    TableCell,
    TableRow,
    Typography,
    Button,
    TextField
} from "@material-ui/core";



function commentRow({body}) {
    const [isEdit,setIsEdit] = useState(false);
    const handleEdit = () => {
        setIsEdit(s => !s);
    }

    return <TableRow>
        <TableCell width="70%">
            <TextField
                disabled = {!isEdit}
                defaultValue={body}
                fullWidth
            />
            </TableCell>
        <TableCell align="right">
            <Button color="primary" variant="contained" onClick={handleEdit} >{isEdit? "OK" : "Edit"}</Button>
        </TableCell>
        <TableCell>
        
            <Button color="secondary" variant="contained" >Delete</Button>
        </TableCell>
    </TableRow>
}

export default commentRow;
