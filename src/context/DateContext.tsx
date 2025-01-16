import { Dayjs } from "dayjs";
import React, {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useState
} from "react";

interface IDateContext {
    startDate: Dayjs | null;
    endDate: Dayjs | null;
    setEndDate: Dispatch<SetStateAction<Dayjs | null>>;
    setStartDate: Dispatch<SetStateAction<Dayjs | null>>;
}

const DateContext = createContext<IDateContext>({} as IDateContext);

const DateContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [startDate, setStartDate] = useState<Dayjs | null>(null);
    const [endDate, setEndDate] = useState<Dayjs | null>(null);

    return (
        <DateContext.Provider value={{ startDate, endDate, setEndDate, setStartDate }}>
            {children}
        </DateContext.Provider>
    )
}

export {
    DateContext,
    DateContextProvider
}