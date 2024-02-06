import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Notes from "./Components/Notes";
import Create from "./Components/Create";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Notes/>}/>
                <Route path="/create" element={<Create/>}/>

            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
