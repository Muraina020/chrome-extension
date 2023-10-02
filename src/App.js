import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import StorePage from "./pages/storePage/StorePage";
import ReadyPage from "./pages/readyPage/ReadyPage";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ReadyPage/>}/>
      {/* <Route path="/store" element={<StorePage/>}/> */}
      {/* <Route path="/access" element={<AccessPage/>}/> */}
      {/* <Route path="/chrome" element={<RecordPage/>}/> */}
      
      {/* <Route path="/movies/:id" element={<Movie/>}/> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
