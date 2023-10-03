import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import StorePage from "./pages/storePage/StorePage";
import ReadyPage from "./pages/readyPage/ReadyPage";
import HomePage from "./pages/homePage/HomePage";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<ReadyPage/>}/> */}
      <Route path="/" element={<HomePage/>}/>
      {/* <Route path="/access" element={<AccessPage/>}/> */}
      {/* <Route path="/chrome" element={<RecordPage/>}/> */}
      
      {/* <Route path="/movies/:id" element={<Movie/>}/> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
