import { useContext, useEffect } from "react";
import { DateContext } from "../../context/DateContext";
import dayjs, { Dayjs } from "dayjs";

const Utills = () => {
    const { setEndDate, setStartDate, startDate, endDate } = useContext(DateContext);
    const currentDate = new Date();
    const pastDate = new Date();
    pastDate.setDate(currentDate.getDate() - 30);

    const formatDate = (date: Date): Dayjs => {
        return dayjs(date);
    };

    useEffect(() => {
        setEndDate(formatDate(currentDate));
        setStartDate(formatDate(pastDate));
    }, []);

    return {
        currentDate: startDate,
        pastDate: endDate,
    };
}

export default Utills
