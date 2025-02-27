import React, {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState
} from "react";
import { IBirthdayLog, ILogs } from "../Pages/Logs/interface";


interface IPageContext {
    pageSize: number;
    page: number;
    count: number;
    birthdayCount: number;
    logs: Array<ILogs>;
    birthdayLogs: Array<IBirthdayLog>;
    setPageSize: Dispatch<SetStateAction<number>>;
    setPage: Dispatch<SetStateAction<number>>;
    setCount: Dispatch<SetStateAction<number>>;
    setBirthdayCount: Dispatch<SetStateAction<number>>;
    setLogs: Dispatch<SetStateAction<Array<ILogs>>>;
    setBirthdayLogs: Dispatch<SetStateAction<Array<IBirthdayLog>>>;
}

const PageContext = createContext<IPageContext>({} as IPageContext);
const PageContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const [logs, setLogs] = useState<ILogs[]>([] as Array<ILogs>);
    const [birthdayLogs, setBirthdayLogs] = useState<IBirthdayLog[]>([] as Array<IBirthdayLog>);
    const [count, setCount] = useState<number>(0);
    const [birthdayCount, setBirthdayCount] = useState<number>(0);

    return (
        <PageContext.Provider value={{
            page,
            pageSize,
            setPage,
            setPageSize,
            setLogs,
            logs,
            count,
            setCount,
            birthdayLogs,
            setBirthdayLogs,
            birthdayCount,
            setBirthdayCount
        }}>
            {children}
        </PageContext.Provider>
    )
};

export {
    PageContext,
    PageContextProvider
}