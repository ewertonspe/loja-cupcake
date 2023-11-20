import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState(new Date());
  const [user, setUser] = useState('Visita');
  const [login, setLogin] = useState(false);
  const [MenuOpen, setMenuOpen] = useState(true);
  const [loading, setLoading] = useState(false);

 
  let url = window.location.hostname + ':1880'
  

  useEffect(() => {
    let date = new Date()
    date = date.toISOString()
    date = date.split("T")[0]
    setEndDate(date)
    setStartDate(date)
    setLoading(true)
  },[])

  return (
    <AppContext.Provider value={
          { 
            startDate, 
            setStartDate, 
            endDate,
            setEndDate,
            user, 
            setUser,
            login,
            setLogin,
            MenuOpen,
            setMenuOpen,
            url
          }}>
      {loading && children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
