import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs"
import NotFound from "./pages/NotFound"
import Scaffold from "./components/Scaffold"
import DashboadSkeleton from "./components/DashboadSkeleton"
import DashboardMessages from "./pages/DashboardMessages"
import DashboardHome from "./pages/DashboardHome"
import { AppContext } from "./context/Appcontext"



export default function App() {


  return (
    
  <AppContext >
    <Scaffold>
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/dashboard" element={<DashboadSkeleton />} >
        <Route index element={<DashboardHome />} />
        <Route path="messages" element={<DashboardMessages />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
     </Routes>
    </Scaffold>
  </AppContext>
  )
}