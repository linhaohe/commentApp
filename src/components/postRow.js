import React, { useState,useEffect,useMemo } from "react";
import {TableBody, Table, TableCell, TableRow, Collapse, Typography, IconButton, Box,TextField } from "@material-ui/core";
import { KeyboardArrowDown, KeyboardArrowRight, Edit, Check ,Clear} from "@material-ui/icons"
import CommentRow from "./commentRow"

function postRow({id,title,body}) {
    const [expand, setExpand] = useState(false);
    const [postComment,setPostComment] = useState({data : [], isFetch: false});
    const [isEdit,setIsEdit] = useState(true);

    useEffect(() => {
        fetchpostComment();
    },[]);

    const fetchpostComment = async () =>{
        await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => {
            if(res.ok){
                return res.json();
            }
                throw new Error("Incorrect URL");
            }
        )
        .then(json => {
            setPostComment({data : json , isFetch:true})
        })
        .catch(err => console.error(err));
    };

    const handleExpand = () => {
        setExpand(s => !s);
    }

    const handleEdit = () => {
        setIsEdit(s => !s);
    }

    const constructTableRow = useMemo(() => postComment.data.map(cur => (<CommentRow key={cur.postID + cur.name} id={cur.name}  body={cur.body} />)), [postComment]);

    return (
        <React.Fragment>
            <TableRow>
                <TableCell>
                <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={handleExpand}
                    >
                        {expand ? <KeyboardArrowDown /> : <KeyboardArrowRight />}

                    </IconButton>
                    
                </TableCell>

                <TableCell width="70%">
                    <TextField
                        disabled = {isEdit}
                        defaultValue={title}
                        fullWidth
                    />
                </TableCell>

                <TableCell align="right">
                <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={handleEdit}
                    >
                        {isEdit ? <Edit /> : <Check />}

                    </IconButton>

                </TableCell>
                <TableCell align="right">

                    <IconButton
                        aria-label="expand row"
                        size="small"
                    >
                        <Clear />

                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={expand} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                        <Typography variant="h6" gutterBottom component="div">
                            {body}
                        </Typography>
                            <Table sx={{ minWidth: 480 }}>
                                <TableBody>
                                    {constructTableRow}
                                    
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}
export default postRow;