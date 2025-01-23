import { ThemeProvider } from "styled-components";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { defaultTheme } from "./styles/themes/Default";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { DefoultLayout } from "./layouts/DefaultLayout";

const Router = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DefoultLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="history" element={<History />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default Router;
