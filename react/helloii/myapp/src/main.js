import { BrowserRouter, Route , Routes} from "react-router-dom"
import Home from "./components/Home"
import Register from "./components/Register"
import Login from "./components/Login"
function Main() {
    return <BrowserRouter>
    <Routes>
        <Route element={Login}  path="/Login" />
        <Route element={Home}  path = "/" />
        <Route element={Register} path = "/Register"/>
        </Routes>
        </BrowserRouter>
}
        export default Main