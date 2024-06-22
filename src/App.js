import { useRef } from 'react';
import './App.css';
import moment from 'moment';
import 'moment/locale/te';
// import 'moment/locale/ta';
// import 'moment/locale/hi';

function App() {

  let dateInputRef = useRef();

  return (
  <div className='App'>

    <h1>DATE AND MOMENT JS</h1>

    <input type='datetime-local' ref={dateInputRef}></input>
    <button onClick={()=>{

      let dateObj = new Date(dateInputRef.current.value);
      console.log(moment(dateObj).format("MMMM-Do-YYYY-h:mm:ss"));
      console.log(moment(dateObj).format('LLLL'));
      console.log(moment(dateObj).format('LL'));

    }}>D A T E</button>
  </div>
  );
}

export default App;
