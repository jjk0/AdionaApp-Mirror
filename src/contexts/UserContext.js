import React, { useContext, useEffect, useState, createContext } from 'react';
import { DataStore,Auth, Hub } from 'aws-amplify';
import { RegisteredInfo, UserInfo} from '../models';

const UserContext = createContext({});


export default function UserContextProvider ({children}) {
    
    const [user, setUser] = useState();
    const [userChecked, setUserChcked] = useState(false);
    useEffect(() => {
        checkUser();
      }, []);
    
    async function checkUser() {
        try {
          // Get the current authenticated user
          const user = await Auth.currentAuthenticatedUser();
          if (user) {
            const person = await DataStore.query(UserInfo, c => c.username("eq", user.attributes.sub));
            console.log('person',person)
            // set the user in state
            setUser(person);
            setUserChcked(true)
          }
        } 
        // Error occurs if there is no user signed in.
        catch (error) {
            console.log('error',error)
            setUser(null);
        }}

  return (
    <UserContext.Provider
    value={{
        user, // the value of the current user
        setUser,
        userChecked // the setState method - allows us to set the current user in state from anywhere in our application
      }}>
          {children}
    </UserContext.Provider>

  );
};

export const useUserContext = () => useContext(UserContext);