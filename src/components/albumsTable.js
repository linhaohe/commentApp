import React,{useState} from "react";
import { Paper, TableBody, Table, TableCell, TableContainer, TableHead, TableRow, Collapse, Typography, Box, Tab, IconButton } from "@material-ui/core";
import { KeyboardArrowDown, KeyboardArrowRight, Edit, Check ,Clear} from "@material-ui/icons"
import { Link } from "react-router-dom";

function albumsTable({data}){
    const [expand,setExpand] = useState(false);

    const handleExpand = () => {
        setExpand(s => !s);
    }

    const constructTableRow = () => data.map(cur => (
    <TableRow key={cur.title} > 
        <TableCell>
        <Link to = {`albums/${cur.id}`} style ={{textDecoration:"none", color:"black"}}>
                {cur.title}
            </Link>
        </TableCell>
     </TableRow>));


    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
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
                        <TableCell>
                            <Typography>Albums</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={expand} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Table sx={{ minWidth: 480 }}>
                                <TableBody>
                                    {constructTableRow()}
                                    
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )

}

export default albumsTable;