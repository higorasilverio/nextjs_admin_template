import AuthContext from "data/context/AuthContext";
import { useContext } from "react";

const useAuth = () => useContext(AuthContext);

export default useAuth;
