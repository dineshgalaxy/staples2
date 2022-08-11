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
function App() {
  return (
   <ThemeProvider theme={theme}>
       <GlobalStyles/>
     
      <TopHeader/>
  
    <MiddleHeader/>
    <Menubar/>
  <Banner/>
  <Flyers/>
   </ThemeProvider>
  );
}

export default App;
