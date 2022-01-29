import React, { useState } from 'react';
import { UserContext } from './UserContext';

const UserProvider: React.FC = ({children}) => {
    const userFromStorage = localStorage.getItem("user");
    const parsedUser = userFromStorage ? JSON.parse(userFromStorage) : null;
    const [user, setUser] = useState<any>(parsedUser);

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;