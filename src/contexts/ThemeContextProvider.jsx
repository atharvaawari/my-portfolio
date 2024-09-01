import { useState } from "react";
import UserContext from "./ThemeContext";

const UserCOntextProvider = ({children}) => {
    const [user, setUser ] = useState(null)

    return(
        <UserContext.Provider value={{user, setUser}} >
        {children}
        </UserContext.Provider>
    )
}

export default UserCOntextProvider;