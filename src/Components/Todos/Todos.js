import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Pagination } from '@mui/material';
import './Todos.css'

export default function Todos() {
    const pageSize = 7;
    const [todos, setTodos] = useState([]);
    const [todoperPage, setTodoperPage] = useState([]);
    const [countPage, setCountPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then((datas) => {
                setTodos(datas)
            })
    }, [])

    useEffect(() => {
        setCountPage(Math.ceil(todos.length / pageSize));
        let endIndex = currentPage * pageSize;
        let startIndex = endIndex - pageSize;
        setTodoperPage(todos.slice(startIndex, endIndex))
    }, [todos])

    useEffect(() => {
        let endIndex = currentPage * pageSize;
        let startIndex = endIndex - pageSize;
        setTodoperPage(todos.slice(startIndex, endIndex))
    }, [currentPage])

    const changePageHandler = (event, value) => {
        setCurrentPage(value)
    }

    return (
        <div className="table-wrapper">
            <TableContainer className='table' component={Paper}>
                <Table aria-label="simple table">
                    <TableHead className='table-head'>
                        <TableRow>
                            <TableCell className='table-head-title'>ID</TableCell>
                            {/* <TableCell className='table-head-title'>User ID</TableCell> */}
                            <TableCell className='table-head-title'>Title</TableCell>
                            <TableCell className='table-head-title'>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {console.log(todos)}
                        {todoperPage.map((todo) => (
                            <TableRow
                                key={todo.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {todo.id}
                                </TableCell>
                                {/* <TableCell>{todo.userId}</TableCell> */}
                                <TableCell>{todo.title}</TableCell>
                                <TableCell><Button color={todo.completed ? 'success' : 'warning'}>{todo.completed ? 'Completed' : 'Pending'}</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Pagination className='pagination' count={countPage} page={currentPage} onChange={changePageHandler} color='primary'></Pagination>
        </div>
    );
}
