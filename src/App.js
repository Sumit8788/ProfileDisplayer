import UserData from "./UserData";
import AdminPannel from "./AdminPannel";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminPannel />} />
        <Route path="/user" element={<UserData />} />
      </Routes>
    </BrowserRouter>
    // <BrowserRouter>
    //   <Routes>
    //     <div>
    //       <Route path="/" element={<AdminPannel />}></Route>
    //       <Route path="/user" element={<UserData />}></Route>
    //     </div>
    //     {/* <UserData></UserData> */}
    //     {/* <AdminPannel></AdminPannel> */}
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
