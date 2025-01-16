import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box } from '@mui/material';
import { Dayjs } from 'dayjs';

interface DateRangePickerProps {
  onStartDateChange: (date: Dayjs | null) => void;
  onEndDateChange: (date: Dayjs | null) => void;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  const handleEndDateChange = (newDate: Dayjs | null) => {
    if (newDate && startDate && newDate.isBefore(startDate)) {
      alert('End date cannot be before start date');
      return;
    }
    onEndDateChange(newDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <Box display="flex" justifyContent="space-between" gap={2}>
          <DatePicker
            label="Start Date"
            value={startDate}
            onChange={(newValue) => onStartDateChange(newValue)}
            format="YYYY-MM-DD"
          />
          <DatePicker
            label="End Date"
            value={endDate}
            onChange={handleEndDateChange}
            format="YYYY-MM-DD"
          />
        </Box>
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DateRangePicker;
