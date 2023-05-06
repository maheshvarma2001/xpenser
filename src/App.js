import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import AddExpense from "./pages/add-expense";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/add-expense" Component={AddExpense}/>
      </Routes>
      <div>Footer</div>
    </Router>
  );
}

export default App;
