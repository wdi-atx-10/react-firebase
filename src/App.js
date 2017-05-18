import './App.css';
  import Header from './components/Header';
  import Motivation from './components/Motivation';
 +import MotivationList from './components/MotivationList';

  class App extends Component {
    render() {
     return (
       <div className="App container">
         <Header></Header>
         <Motivation></Motivation>
       </div>
     );
   }
 }

 export default App;
