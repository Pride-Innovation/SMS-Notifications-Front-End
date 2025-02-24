import React from 'react';
import DateRangePicker from '../../components/DateRangePicker';
import { IParentComponent } from './interface';
import MultiActionAreaCard from '../../components/ReportsCard';
import { Grid, Stack } from '@mui/material';
import CakeIcon from '@mui/icons-material/Cake';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const ParentComponent: React.FC<IParentComponent> = ({
    startDate, endDate, handleEndDateChange, handleStartDateChange
}) => {

    return (
        <Grid container>
            {/* <h3>Select Date Range</h3> */}
            {/* <DateRangePicker
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={handleStartDateChange}
                onEndDateChange={handleEndDateChange}
            /> */}
            <Grid item xs={8} >
                <Stack direction="row" spacing={3} sx={{ width: "100%" }}>
                    <MultiActionAreaCard
                        header='Loans Due'
                        color="blue"
                        icon={<CalendarMonthIcon fontSize='large' sx={{ color: "#fff" }} />} />
                    <MultiActionAreaCard
                        header='Birthdays'
                        color='green'
                        icon={<CakeIcon fontSize='large' sx={{ color: "#fff" }} />} />
                </Stack>
            </Grid>
        </Grid>
    );
};

export default ParentComponent;
