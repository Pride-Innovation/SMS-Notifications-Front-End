import { useContext, useEffect } from "react"
import { ILogs, ILogsResponse } from "../interface"
import { fetchLogsService } from "../../FileUpload/service";
import { Box, Grid, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import moment from "moment";
import Utills from "../utills";
import ParentComponent from "../DateRangePicker";
import { Dayjs } from "dayjs";
import { DateContext } from "../../../context/DateContext";
import CustomTablePagination from "../TablePagination";
import { PageContext } from "../../../context/PageContext";

const Logs = () => {
    const { currentDate, pastDate, logsEndpoint  } = Utills();
    const { startDate, endDate, setEndDate, setStartDate } = useContext(DateContext);
    const {
        pageSize,
        logs,
        setLogs,
        count,
        setCount
    } = useContext(PageContext);

    const { handleTablePagination } = CustomTablePagination({
        start: startDate?.format('YYYY-MM-DD') as string,
        end: endDate?.format('YYYY-MM-DD') as string,
        endpoint: logsEndpoint
    });

    const handleStartDateChange = (date: Dayjs | null) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date: Dayjs | null) => {
        setEndDate(date);
    };

    const fetchLogs = async () => {
        const start = startDate?.format('YYYY-MM-DD') as string;
        const end = endDate?.format('YYYY-MM-DD') as string;
        if (!start || !end) return;
        const response = await fetchLogsService(start, end, pageSize, 1, logsEndpoint) as ILogsResponse;
        setCount(response?.count);
        setLogs(response?.results.logs as ILogs[]);
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
            headerName: 'CREATED AT',
            renderCell: (params) => (
                <Typography sx={{ height: "100%", display: "flex", alignItems: "center", fontSize: 14 }}>
                    {moment(params.row.created_at).format('MMMM Do YYYY, h:mm:ss a')}
                </Typography>
            )
        },
        {
            field: 'due_date',
            flex: 0.5,
            headerName: 'DUE DATE',
        },
        {
            field: 'amount_due',
            flex: 1,
            headerName: 'AMOUNT DUE (UGX)',
            type: 'number',
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
                        count={count}
                    />
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ width: '100%' }}>
                    {logs?.length > 0 &&
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
                            rows={logs}
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

export default Logs;