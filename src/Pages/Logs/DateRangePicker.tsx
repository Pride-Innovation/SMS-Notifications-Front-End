import React from 'react';
import DateRangePicker from '../../components/DateRangePicker';
import { IParentComponent } from './interface';
import MultiActionAreaCard from '../../components/ReportsCard';
import { Card, Grid, Stack } from '@mui/material';
import CakeIcon from '@mui/icons-material/Cake';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Utills from './utills';
import { useNavigate } from 'react-router';
import { ROUTES } from '../../core/routes';

const ParentComponent: React.FC<IParentComponent> = ({
    startDate, endDate, handleEndDateChange, handleStartDateChange, count, birthdayCount
}) => {
    const { cards } = Utills();
    const navigate = useNavigate();

    const handleCardClick = (name: string) => {
        if (name === cards.birthdays) navigate(ROUTES.BIRTHDAY_REPORTS);
        if (name === cards.loans) navigate(ROUTES.REPORTS);
    }

    return (
        <Grid container>
            <Grid item xs={7.5}>
                <Stack direction="row" spacing={3} sx={{ width: "100%" }}>
                    <MultiActionAreaCard
                        handleCardClick={handleCardClick}
                        name={cards.loans}
                        header='Loans Due'
                        color="blue"
                        total={count as number}
                        icon={<CalendarMonthIcon fontSize='large' sx={{ color: "#fff" }} />} />
                    <MultiActionAreaCard
                        handleCardClick={handleCardClick}
                        name={cards.birthdays}
                        header='Birthdays'
                        color='green'
                        total={birthdayCount as number}
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
