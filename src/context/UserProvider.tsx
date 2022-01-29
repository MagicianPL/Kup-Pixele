import React, { useState } from 'react';
import { UserContext } from './UserContext';

const UserProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<any | null>(null);

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;