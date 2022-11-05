import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";

//Show the menu items only when the user is logged in
export const ShowOnLogin = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    if(isLoggedIn){
        return <>{children}</>;
    } else {
        return null;
    }
};

// Don't show the menu items only when the user is logged in
export const ShowOnLogout = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    if(!isLoggedIn){
        return <>{children}</>;
    } else {
        return null;
    }
};