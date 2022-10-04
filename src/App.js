import './App.css';
import {ThemeProvider } from '@mui/system';
import theme from './utils/theme';
import GlobalStyles from './utils/globalstyles';
// import Menubar from './components/Header/Menubar1/Menubar';
import TopHeader from './components/Header/TopHeader/TopHeader';
import MiddleHeader from './components/Header/MiddleHeader/MiddleHeader';
import Banner from './components/Banner/Banner';
import Flyers from './components/Flyers/Flyers';
import Products from './components/Products/Products';
import Brands from './components/Brands/Brands';
import Updates from './components/Updates/Updates';
import Footer from './components/Footer/Footer';
import SubFooter from './components/Footer/SubFooter/SubFooter';
import Menubar from './components/Header/Menubar/Menubar';
// import  SupportMenu  from './components/demo';
import Apps from './components/demo';
import SingleProject from './components/demo';
function App() {
  return (
   <ThemeProvider theme={theme}>
       <GlobalStyles/>
     
      <TopHeader/>
  
    <MiddleHeader/>
   <Menubar/>
   {/* <SupportMenu icon="user" test="myuser"/> */}

  <Banner/>
  <Flyers/>
  <Products/>
  <Brands/>
  <Updates/>
  <Footer/>
  {/* <SubFooter/> */}
    <button style={{backgroundColor:'#556cd6'}}>Hrello</button>
   </ThemeProvider>
  );
}

export default App;
