import { RouterProvider, createBrowserRouter } from "react-router-dom";

import WelcomePage from "./pages/Welcome.js";
import QuizPage from "./pages/QuizPage.js";

const router = createBrowserRouter([
    { path: "/", element: <WelcomePage /> },
    { path: "/quiz", element: <QuizPage /> },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
