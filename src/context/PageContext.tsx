import React, {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState
} from "react";
import { ILogs } from "../Pages/Logs/interface";


interface IPageContext {
    pageSize: number;
    page: number;
    count: number;
    logs: Array<ILogs>;
    setPageSize: Dispatch<SetStateAction<number>>;
    setPage: Dispatch<SetStateAction<number>>;
    setCount: Dispatch<SetStateAction<number>>;
    setLogs: Dispatch<SetStateAction<Array<ILogs>>>;
}

const PageContext = createContext<IPageContext>({} as IPageContext);
const PageContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const [logs, setLogs] = useState<ILogs[]>([] as Array<ILogs>);
    const [count, setCount] = useState<number>(0);

    return (
        <PageContext.Provider value={{
            page,
            pageSize,
            setPage,
            setPageSize,
            setLogs,
            logs,
            count,
            setCount
        }}>
            {children}
        </PageContext.Provider>
    )
};

export {
    PageContext,
    PageContextProvider
}