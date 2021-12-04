import './App.css';
import Register from './pages/register';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/registro" element={<Register />} />
      </Routes>
      <footer class="my-2 pt-2 text-muted text-center text-small">
        <p class="mb-1">Copyright © 2018 Banco Caja Social</p>
        {/* <!-- <ul class="list-inline">
          <li class="list-inline-item"><a href="#">Privacy</a></li>
          <li class="list-inline-item"><a href="#">Terms</a></li>
          <li class="list-inline-item"><a href="#">Support</a></li>
        </ul> --> */}
      </footer>

    </>
  );
}

export default App;
