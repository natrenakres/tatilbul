import { createContext, useContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from "react";
import { checkAuth } from "../auth/checkAuth";
import { User } from "@/src/entities/users/model";


interface AuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
    currentUser: User | null | undefined;
    setCurrentUser: Dispatch<SetStateAction<User | null | undefined>>;
  }
  
const defaultAuthContext: AuthContextType = {
    isAuthenticated: false,
    setIsAuthenticated: () => {}, 
    currentUser: null,
    setCurrentUser: () => {}, 
  };


const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export function AuthProvider({children}: { children: ReactNode}) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<User | null | undefined>(null);

    useEffect(()=> {
        async function checkAuthentication() {
            const { isAuthenticated, user} = await checkAuth();
            setIsAuthenticated(isAuthenticated);
            setCurrentUser(user);
        }

        checkAuthentication();
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            setIsAuthenticated,
            currentUser,
            setCurrentUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);

    if(!context) {
        throw Error('useAuth must be used within Auth provider');
    }

    return context;
}