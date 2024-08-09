import { createContext, useState, useEffect, ReactNode, SetStateAction } from "react"
import dadosProdutos from '../../public/data/data.ts'
import Produto from "../types/Produto.ts";

interface IContext {
    produtos: Produto[]
    setProdutos: React.Dispatch<SetStateAction<Produto[]>>
    notificando: boolean
    setNotificando: React.Dispatch<SetStateAction<boolean>>
}

export const DataContext = createContext<IContext>(null);
DataContext.displayName = "rTech"

export const DataProvider = ({ children }:{ children:ReactNode }) => {
    const [produtos, setProdutos] = useState([...dadosProdutos]);
    const [notificando, setNotificando] = useState(false)

    return (
        <DataContext.Provider value={{
            produtos, setProdutos,
            notificando, setNotificando
        }}>
            {children}
        </DataContext.Provider>
    )
}
