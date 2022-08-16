import './App.css';
import {ThemeProvider } from '@mui/system';
import theme from './utils/theme';
import GlobalStyles from './utils/globalstyles';
// import Menubar from './components/Header/Menubar1/Menubar';
import TopHeader from './components/Header/TopHeader/TopHeader';
import Menubar from './components/Header/menubar/Menubar';
import MiddleHeader from './components/Header/MiddleHeader/MiddleHeader';
import Banner from './components/Banner/Banner';
import Flyers from './components/Flyers/Flyers';
import Products from './components/Products/Products';
import Brands from './components/Brands/Brands';
import Updates from './components/Updates/Updates';
import ControlledAccordions from './components/demo';
import Footer from './components/Footer/Footer';
import SubFooter from './components/Footer/SubFooter/SubFooter';
function App() {
  return (
   <ThemeProvider theme={theme}>
       <GlobalStyles/>
     
      <TopHeader/>
  
    <MiddleHeader/>
    <Menubar/>
  <Banner/>
  <Flyers/>
  <Products/>
  <Brands/>
  <Updates/>
  <Footer/>
  {/* <SubFooter/> */}
   </ThemeProvider>
  );
}

export default App;
