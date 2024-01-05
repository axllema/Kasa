import { createBrowserRouter, RouterProvider } from "react-router-dom";
import '../styles/main.scss'

const router = createBrowserRouter([
    {
    path : '/',
    element: <div> Salut </div>
    }
])


function App() {
    return <RouterProvider router={router} />
}

export default App
