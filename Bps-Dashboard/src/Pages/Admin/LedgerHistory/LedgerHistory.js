import React, { useRef } from 'react';
import {
    Box, Button, Typography, TableContainer, Table,
    TableHead, TableRow, TableCell, TableBody, Paper, IconButton
} from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import { useReactToPrint } from 'react-to-print';

const invoiceData = [
    {
        id: 'INV001',
        date: '2025-05-20',
        name: 'John Doe',
        orderAmount: 1500,
        totalAmount: 2000,
        remainingAmount: 500,
    },
    {
        id: 'INV002',
        date: '2025-05-19',
        name: 'Jane Smith',
        orderAmount: 2500,
        totalAmount: 3000,
        remainingAmount: 500,
    },
];

const LedgerHistory = () => {
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <Box sx={{ p: 2 }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 2,
                    mb: 2,
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Customer Invoice
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<PrintIcon />}
                    onClick={handlePrint}
                    sx={{ textTransform: 'none', fontWeight: 500 }}
                >
                    Print
                </Button>
            </Box>

            <TableContainer component={Paper} ref={componentRef}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#1565c0' }}>
                            <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>S.No</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Invoice ID</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Date</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Order Amount</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Total Amount</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Remaining Amount</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Invoice</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {invoiceData.map((invoice, index) => (
                            <TableRow key={invoice.id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{invoice.id}</TableCell>
                                <TableCell>{invoice.date}</TableCell>
                                <TableCell>{invoice.name}</TableCell>
                                <TableCell>{invoice.orderAmount}</TableCell>
                                <TableCell>{invoice.totalAmount}</TableCell>
                                <TableCell>{invoice.remainingAmount}</TableCell>
                                <TableCell>
                                    <IconButton color="primary">
                                        <PrintIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default LedgerHistory;
