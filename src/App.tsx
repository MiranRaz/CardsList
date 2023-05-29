// react
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// components
import NavBar from "./components/NavBar/NavBar.tsx";
import MyCardsList from "./components/MyCardsList/TheCards/MyCardsList.tsx";
import MuiCardList from "./components/MUICardList/MUICardList.tsx";
const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<MyCardsList />} />
          <Route path="/mui" element={<MuiCardList />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
