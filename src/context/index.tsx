import { 
    createContext, 
    Dispatch, 
    FC, 
    SetStateAction, 
    useState 
} from "react";
import { ILoanDue } from "../utills/interfaces";

interface ILoanDueContext {
    data: Array<ILoanDue>;
    setData: Dispatch<SetStateAction<ILoanDue[]>>
}

export const LoansContext = createContext<ILoanDueContext>({} as ILoanDueContext);

export const LoansContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, setData] = useState<Array<ILoanDue>>([] as Array<ILoanDue>);

    return (
        <LoansContext.Provider value={{ data, setData }}>
            {children}
        </LoansContext.Provider>
    )
};