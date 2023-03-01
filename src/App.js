import { Space } from "antd";
import "./App.css";
import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/AppHeader/AppHeader";
import PageContent from "./components/PageContent/PageContent";
import SideMenu from "./components/SideMenu/SideMenu";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu />
        <PageContent />
      </div>
      <AppFooter/>
    </div>
  );
}

export default App;
