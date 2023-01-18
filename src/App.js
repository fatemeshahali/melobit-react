import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import { MusicProvider } from "./services/useContext/MusicContext";

function App() {
  return (
    <MusicProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="details/:id" element={<Details />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </MusicProvider>

  );
}

export default App;
