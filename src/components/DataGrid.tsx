import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { LoansContext } from '../context';
import { Typography } from '@mui/material';
import Helpers from '../utills/helpers';
import { red } from '@mui/material/colors';

export default function DataTable() {
    const { excelSerialToDate } = Helpers();

    const columns: GridColDef[] = [
        {
            field: 'CUST_ID',
            flex: 1,
            headerName: 'CUSTOMER NUMBER',
        },
        {
            field: 'ACCT_NM',
            flex: 1,
            headerName: 'ACCOUNT NAME',
        },
        {
            field: 'TEL_NUMBER',
            flex: 1,
            headerName: 'TELEPHONE NUMBER',
        },
        {
            field: 'DUE_DT',
            flex: 1,
            headerName: 'DUE DATE',

            renderCell: (param) => {
                return (
                    <Typography sx={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        fontSize: "14px",
                        color: red[600]
                    }
                    }>{excelSerialToDate(param.row.DUE_DT)}</Typography>
                )
            }
        },
        {
            field: 'AMT_DUE',
            flex: 1,
            headerName: 'AMOUNT DUE (UGX)',
            type: 'number',
        }
    ];

    const { data } = React.useContext(LoansContext);

    return (
        <Box sx={{ width: '100%' }}>
            {data.length > 0 &&
                <DataGrid
                    sx={{
                        '& .MuiDataGrid-columnHeaders': {
                            backgroundColor: 'red',
                            color: 'black',
                        },
                        '& .MuiDataGrid-columnHeaderTitle': {
                            fontWeight: 'bold',
                        },
                    }}
                    rows={data}
                    columns={columns}
                    getRowId={(row) => row?.CUST_ID}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    pageSizeOptions={[10, 25]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />}
        </Box>
    );
}