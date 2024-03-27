import React from "react";
import NewsContainer from "./container/newsContainer/newsContainer";
import { DataProvider } from '../src/container/newsContainer/dataProviderComponent/DataProvider';
import Navbar from "./container/newsContainer/NavBar/navBar";
import LoginPage from "./container/loginPage/loginPage";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <DataProvider>
      <Navbar/>
      <Router>
        <Routes>
          <Route  path="/" element={<NewsContainer />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
