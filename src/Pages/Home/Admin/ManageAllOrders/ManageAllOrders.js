import React, { useEffect, useState } from 'react';
import { Button, Container } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Pending } from '@mui/icons-material';

const ManageAllOrders = () => {
    const [manageAll, setManageAll] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/manageAllOrders')
            .then(res => res.json())
            .then(data => setManageAll(data))
    }, [manageAll])
    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure You Want to delete');
        if (proceed) {
            const url = `http://localhost:5000/manageAllorders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCoutn > 0) {
                        alert('Deleted Sucessfully');
                        manageAll(data)
                    }
                })
        }
    }
    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ fontSize: '15px' }}>
                            <TableCell>Customer Name</TableCell>
                            <TableCell align="center">Product</TableCell>
                            <TableCell align="center">E-mail</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Time</TableCell>
                            <TableCell align="center">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {manageAll.map(item => (
                            <TableRow
                                key={item._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {item.name}
                                </TableCell>
                                <TableCell align="center">{item.serviceName}</TableCell>
                                <TableCell align="center">{item.email}</TableCell>
                                <TableCell align="center">${item.price}</TableCell>
                                <TableCell align="center">{item.createdAt}</TableCell>
                                <TableCell align="center"><Button onClick={() => handleDelete(item._id)}>Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ManageAllOrders;