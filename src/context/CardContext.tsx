import React, {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction
} from "react";

interface ICardContext {
    currentCard: string;
    setCurrentCard: Dispatch<SetStateAction<string>>
}

export const CardContext = createContext<ICardContext>({} as ICardContext);

export const CardContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentCard, setCurrentCard] = React.useState<string>("")
    return (
        <CardContext.Provider value={{ currentCard, setCurrentCard }}>
            {children}
        </CardContext.Provider>
    )
}