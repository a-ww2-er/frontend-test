import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import App from "../App";

//context type
type AppContextProviderProp = {
  children: React.ReactNode;
};
//All states types
type AppStatesTypes ={
    details:any ,
    setDetails: React.Dispatch<any>,
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setSelectedUser:  React.Dispatch<React.SetStateAction<string | undefined>>,
    selectedUser: string | undefined,
    errors: boolean,
    setErrors:React.Dispatch<React.SetStateAction<boolean>>
}
//create context
const AppContext = createContext({} as AppStatesTypes);

 const AppContextProvider = ({ children }: AppContextProviderProp) => {
//declare states here
 const [lod,setlod]=useState<boolean>(false)
 const [details, setDetails] = useState<any>({});
 const [isLoading, setIsLoading] = useState<boolean>(false);
 const [errors, setErrors] = useState<boolean>(false);
 const [selectedUser, setSelectedUser] = useState<string | undefined>("0");

 useEffect(() => {
   const getUserDetailsFromApi = async () => {
    try{
     setIsLoading(true);
     setErrors(false)
     const result = await axios.get(
       `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${selectedUser}`
     );
     setDetails(result.data), setIsLoading(false);
   }
   catch(error){
    console.log(error)
     setErrors(true);
   }
  }
  getUserDetailsFromApi();
 }, [selectedUser]);


//returning values/states/properties
  return <AppContext.Provider value ={{ details,
  setDetails,
  isLoading,
  setIsLoading,
  selectedUser,
  setSelectedUser,
  errors,
  setErrors
  }}>
    {children}
  
  </AppContext.Provider>;
};
export { AppContext, AppContextProvider };

