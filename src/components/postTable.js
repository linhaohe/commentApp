import React, { useState, useMemo } from "react";
import { Paper, TableBody, Table, TableCell, TableContainer, TableHead, TableRow, Collapse, Typography, TextField } from "@material-ui/core";
import PostRow from "./postRow"
function postTable({ data }) {

    const constructTableRow = useMemo(() => data.map(cur => (<PostRow key={cur.userId + "," + cur.id} id={cur.id} title={cur.title} body={cur.body} />)), [data]);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 480 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography style={{ "fontWeight": "bold" }}> Post</Typography>
                        </TableCell>

                        <TableCell align="left">
                            <Typography style={{ "fontWeight": "bold" }}> Title</Typography>
                        </TableCell>

                        <TableCell align="right">
                            <TextField label="Search field" type="search" />

                        </TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {constructTableRow}

                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default React.memo(postTable);