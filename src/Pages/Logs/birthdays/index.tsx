import { Box, Grid, Typography } from '@mui/material'
import { useContext, useEffect } from 'react'
import ParentComponent from '../DateRangePicker'
import { DateContext } from '../../../context/DateContext';
import { Dayjs } from "dayjs";
import Utills from '../utills';
import { PageContext } from '../../../context/PageContext';
// import { ILogsResponse } from '../interface';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CustomTablePagination from '../TablePagination';
import moment from "moment";
import { birthdayLogsMocks } from '../../../mocks';


const BirthdayLogs = () => {
    const { startDate, endDate, setEndDate, setStartDate } = useContext(DateContext);
    const { currentDate, pastDate } = Utills();
    const {
        // pageSize,
        birthdayLogs,
        setBirthdayLogs,
        count,
        setCount
    } = useContext(PageContext);

    const handleStartDateChange = (date: Dayjs | null) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date: Dayjs | null) => {
        setEndDate(date);
    };

    const { handleTablePagination } = CustomTablePagination({
        start: startDate?.format('YYYY-MM-DD') as string,
        end: endDate?.format('YYYY-MM-DD') as string
    });

    const fetchLogs = async () => {
        const start = startDate?.format('YYYY-MM-DD') as string;
        const end = endDate?.format('YYYY-MM-DD') as string;
        if (!start || !end) return;
        // const response = await fetchLogsService(start, end, pageSize, 1) as ILogsResponse;
        setCount(birthdayLogsMocks?.length);
        setBirthdayLogs(birthdayLogsMocks);
    }

    useEffect(() => { fetchLogs() }, [currentDate, pastDate]);

    const columns: GridColDef[] = [
        {
            field: 'phone_number',
            flex: 0.8,
            headerName: 'TELEPHONE NUMBER',
        },
        {
            field: 'account_name',
            flex: 1,
            headerName: 'ACCOUNT NAME',
        },
        {
            field: 'status',
            flex: 1,
            headerName: 'STATUS',
        },
        {
            field: 'created_at',
            flex: 1.2,
            headerName: 'Date of Birth',
            renderCell: (params) => (
                <Typography sx={{ height: "100%", display: "flex", alignItems: "center", fontSize: 14 }}>
                    {moment(params.row.created_at).format('MMMM Do YYYY, h:mm:ss a')}
                </Typography>
            )
        },
        {
            field: 'email',
            flex: 1,
            headerName: 'Email',
        }
    ];

    return (
        <Grid container spacing={4} padding={4}>
            <Grid item xs={12}>
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", bgcolor: "#EEEEEE", p: 3 }}>
                    <ParentComponent
                        startDate={startDate}
                        endDate={endDate}
                        handleEndDateChange={handleEndDateChange}
                        handleStartDateChange={handleStartDateChange}
                    />
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ width: '100%' }}>
                    {birthdayLogs?.length > 0 &&
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
                            loading={false}
                            rows={birthdayLogs}
                            columns={columns}
                            rowCount={count}
                            paginationMode={"server"}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 10,
                                    },
                                },
                            }}
                            pageSizeOptions={[5, 10, 25]}
                            checkboxSelection
                            disableRowSelectionOnClick
                            onPaginationModelChange={handleTablePagination}
                        />}
                </Box>
            </Grid>
        </Grid>
    )
}

export default BirthdayLogs