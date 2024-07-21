import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const storeTokenInLS = (serverToken) => {
        localStorage.setItem("token", serverToken);
    };

    const logout = () => {
        localStorage.removeItem("token");
        navigate('/'); // Redirect to homepage
    };

    const isAuthenticated = () => {
        return !!localStorage.getItem("token");
    };

    return (
        <AuthContext.Provider value={{ storeTokenInLS, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth is outside of the Provider");
    }
    return authContextValue;
};
