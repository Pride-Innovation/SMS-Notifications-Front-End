import { useContext, useEffect } from "react";
import { DateContext } from "../../context/DateContext";
import dayjs, { Dayjs } from "dayjs";

const Utills = () => {
    const { setEndDate, setStartDate, startDate, endDate } = useContext(DateContext);
    const currentDate = new Date();
    const pastDate = new Date();
    pastDate.setDate(currentDate.getDate() - 30);

    const cards: {
        "loans": string,
        "birthdays": string
    } = {
        loans: "Loans Due",
        birthdays: "Birthdays"
    }

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
        cards,
    };
}

export default Utills
