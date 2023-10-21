import './App.css';
import ImagesSlider from './components/imagesSlider';

// const cat1 = "https://pulpbits.net/wp-content/uploads/2014/01/Tabby-Cat-Images.jpg"
// const cat2 = "https://i.pinimg.com/originals/2d/f6/db/2df6dbe8ff3e019bc25c43617ba5150d.jpg"
// const cat3 = "https://petsnurturing.com/wp-content/uploads/2018/11/smallest-cat-breeds-1.jpg"
// const cat4 = "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-140594401-1-scaled.jpg"
// const cat5 = ""

import cat1 from './imgs/cat-1.jpg'
import cat2 from './imgs/cat-2.jpg'
import cat3 from './imgs/cat-3.jpg'
import cat4 from './imgs/cat-4.jpg'
import cat5 from './imgs/cat-5.jpg'

const catIMAGES = [cat1,cat2,cat3,cat4,cat5]

function App() {
  return (
    <body>
      <header>
        <div id='Logo'>
          <h3>Logo</h3>
        </div>
        <ul>
          <li>About</li>
          <li>Career</li>
          <li>Contacts</li>
        </ul>
        <div id='light-mode-div'>
          <button id='light-mode'>Dark Mode</button>
        </div>
      </header>

      <div style = {{width:'100%',height:'500px', margin:'0 auto'}}>
        <ImagesSlider catIMAGES={catIMAGES}/>
      </div>

    </body>
  );
}

export default App;
