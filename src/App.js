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

const catIMAGES = [
    {url:cat1, alt:'Cat One'},
    {url:cat2, alt:'Cat Two'},
    {url:cat3, alt:'Cat Three'},
    {url:cat4, alt:'Cat Four'},
    {url:cat5, alt:'Cat Five'},

  ]

function App() {
  return (
    <body>
      <header>
        <div id='Logo'>
          <h3>Logo</h3>
        </div>
        <ul>
          <button className='header-btn'><li>About</li></button>
          <button className='header-btn'><li>Career</li></button>
          <button className='header-btn'><li>Contacts</li></button>
        </ul>
        <div id='light-mode-div'>
          <button id='light-mode'>Dark Mode</button>
        </div>
      </header>

      <div style = {{
        maxWidth:'1300px',
        width:'100%',
        aspectRatio:'9/5' , 
        margin:'0 auto'}}>
        <ImagesSlider catIMAGES={catIMAGES}/>
      </div>
        <a 
          href='/' 
          style=
            {{
              fontSize:'4rem', 
              display:'flex',
              justifyContent:'center',
              textDecoration:'none',
              color:'black'
            }}>
              Link
        </a>
    </body>
  );
}

export default App;
