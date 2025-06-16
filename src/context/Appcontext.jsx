import { useContext, createContext, useState } from 'react'

const Context = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext(){
    return useContext(Context);
}

export function AppContext ({ children }) {
    const [getVal, setVal] = useState("hi")

    return <Context.Provider value={{greet: getVal, setGreet: setVal}}>
        {children}
    </Context.Provider>
} 