import React,{Component, Fragment} from 'react';
import Routes from './routes';
import Header from './components/Header/';
import Footer from './components/Footer/';
import './style.css';

class App extends Component{
  render(){
    return(
      <Fragment>
        <Header />
        <Routes />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
