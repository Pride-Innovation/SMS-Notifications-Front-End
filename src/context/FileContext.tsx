import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useState
} from "react";

interface IFileContext {
    fileName: string;
    setFileName: Dispatch<SetStateAction<string>>
}

export const FileContext = createContext<IFileContext>({} as IFileContext);

const FileContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [fileName, setFileName] = useState<string>("");

    return (
        <FileContext.Provider value={{ fileName, setFileName }}>
            {children}
        </FileContext.Provider>
    )
};

export default FileContextProvider;