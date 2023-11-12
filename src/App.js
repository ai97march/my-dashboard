import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Calendar from "./scenes/calendar/calendar";
import Geography from "./scenes/geography";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="my-dashboard/" element={<Dashboard />} />
              <Route path="my-dashboard/team" element={<Team />} />
              <Route path="my-dashboard/contacts" element={<Contacts />} />
              <Route path="my-dashboard/invoices" element={<Invoices />} />
              <Route path="my-dashboard/form" element={<Form />} />
              <Route path="my-dashboard/bar" element={<Bar />} />
              <Route path="my-dashboard/pie" element={<Pie />} />
              <Route path="my-dashboard/line" element={<Line />} />
              <Route path="my-dashboard/faq" element={<FAQ />} />
              <Route path="my-dashboard/calendar" element={<Calendar />} />
              <Route path="my-dashboard/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
