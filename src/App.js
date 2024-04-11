import UserData from "./UserData";
import AdminPannel from "./AdminPannel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateUser from "./UpdateUser";
import Error from "./Error"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminPannel />} />
        <Route path="/user" element={<UserData />} />
        <Route path="/update" element={<UpdateUser />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
