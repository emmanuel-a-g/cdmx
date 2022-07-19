import { useState, useContext, createContext, useEffect } from "react";

// create context
const MyContext = createContext();
// use the context
export function useMyContext() {
  return useContext(MyContext);
}
// create a wrapper
export function ContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    console.log("Junbi..");
    setLoading(false);
  }, [])

  const myValues = {}

  return (
    <MyContext.Provider value={myValues}>
      {!loading && children}
    </MyContext.Provider>
  )
}
