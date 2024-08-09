import { createContext, useState, useEffect } from 'react'

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    const [, ] = useState([]);
    
    return (
        <DataContext.Provider value={{ ,  }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider

