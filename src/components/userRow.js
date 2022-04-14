import React, { useState } from "react";
import { TableCell, TableRow, Popover, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    popover: {
        pointerEvents: "none"
    },
    paper: {
        padding: theme.spacing(3)
    }
}));

function userRow({id, name, username, email }) {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);
    const handlePopoverOpen = event => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row" onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
            <Link to = {`userPage/${id}`} style ={{textDecoration:"none", color:"black"}}>
                {name}
            </Link>
            </TableCell>
            <Popover
                className={classes.popover}
                classes={{
                    paper: classes.paper
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography>Name: {username}</Typography>
                <Typography>Email: {email}</Typography>

            </Popover>
        </TableRow>
    );
}

export default userRow;