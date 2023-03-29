import { createBrowserRouter } from "react-router-dom";
import Faturas from "../pages/Faturas";
import Home from "../pages/Home";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/faturas",
		element: <Faturas />
	}
]);


export default router;