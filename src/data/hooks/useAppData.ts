import AppContext from "data/context/AppContext";
import { useContext } from "react";

const useAppData = () => useContext(AppContext);

export default useAppData;
