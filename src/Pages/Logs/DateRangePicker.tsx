import React from 'react';
import DateRangePicker from '../../components/DateRangePicker';
import { IParentComponent } from './interface';
import MultiActionAreaCard from '../../components/ReportsCard';
import { Card, Grid, Stack } from '@mui/material';
import CakeIcon from '@mui/icons-material/Cake';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const ParentComponent: React.FC<IParentComponent> = ({
    startDate, endDate, handleEndDateChange, handleStartDateChange
}) => {

    return (
        <Grid container>
            <Grid item xs={7.5}>
                <Stack direction="row" spacing={3} sx={{ width: "100%" }}>
                    <MultiActionAreaCard
                        name='Loans Due'
                        header='Loans Due'
                        color="blue"
                        icon={<CalendarMonthIcon fontSize='large' sx={{ color: "#fff" }} />} />
                    <MultiActionAreaCard
                        name='Birthday'
                        header='Birthdays'
                        color='green'
                        icon={<CakeIcon fontSize='large' sx={{ color: "#fff" }} />} />
                </Stack>
            </Grid>
            <Grid item xs={4.5} px={3} >
                <Card sx={{ display: "flex", justifyContent: "flex-end", width: "100%", p: 4 }}>
                    <DateRangePicker
                        startDate={startDate}
                        endDate={endDate}
                        onStartDateChange={handleStartDateChange}
                        onEndDateChange={handleEndDateChange}
                    />
                </Card>
            </Grid>
        </Grid>
    );
};

export default ParentComponent;
