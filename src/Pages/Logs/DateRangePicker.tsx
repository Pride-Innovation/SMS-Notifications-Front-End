import React from 'react';
import DateRangePicker from '../../components/DateRangePicker';
import { IParentComponent } from './interface';

const ParentComponent: React.FC<IParentComponent> = ({
    startDate, endDate, handleEndDateChange, handleStartDateChange
}) => {

    return (
        <div>
            <h3>Select Date Range</h3>
            <DateRangePicker
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={handleStartDateChange}
                onEndDateChange={handleEndDateChange}
            />
        </div>
    );
};

export default ParentComponent;
