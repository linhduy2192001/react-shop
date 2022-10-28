import { useSelector } from "react-redux";

export const usePage = () => useSelector(store => store.page)

export default usePage