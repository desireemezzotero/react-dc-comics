import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { menuHeader, menuFooter } from "./data/menuData";

const App = () => {
  return (
    <>
    <Header menu={menuHeader}/>
    <Main />
    <Footer menu={menuFooter}/>
    </>
  )
}

export default App;