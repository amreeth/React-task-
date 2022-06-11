import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./pages/HomeScreen";
import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";
import ViewProductScreen from "./pages/ViewProductScreen";
import DeleteProductScreen from "./pages/DeleteProductScreen";
import "./App.css";
import Add from "./pages/Add";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Container style={{ minHeight: "79.9vh" }} fluid>
          <Routes>
            <Route path="/add-product" element={<Add />} />
            <Route path="/view-product" element={<ViewProductScreen />} />
            <Route path="/delete-product" element={<DeleteProductScreen />} />
            
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
