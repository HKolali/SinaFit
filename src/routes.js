import Home from "./Pages/Home/Home"
import Services from "./Pages/Services/Services"
import Supplement from "./Pages/Supplement/Supplement"
import Movement from "./Pages/Movement/Movement"
import Nutrition from "./Pages/Nutrition/Nutrition"
import Articles from "./Pages/Articles/Articles"
import ContactMe from "./Pages/ContactMe/ContactMe"

let routes = [
    {path: "/", element: <Home />},
    {path: "/services", element: <Services />},
    {path: "/supplement", element: <Supplement />},
    {path: "/movement", element: <Movement />},
    {path: "/nutrition", element: <Nutrition />},
    {path: "/articles", element: <Articles />},
    {path: "/contact-me", element: <ContactMe />}
]

export default routes;