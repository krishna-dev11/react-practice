import './App.css';
import Product from './components/Product'
import Newproduct from './components/Newproduct';

const products = [
  {
    id:'p1',
    title:'Nirma',
    amount:100,
    date:new Date(2024,7,11),
  },
  {
    id:'p2',
    title:'Ariel',
    amount:200,
    date:new Date(2024,1,6),
  },
  {
    id:'p3',
    title:'Surf-exel',
    amount:300,
    date:new Date(2024,11,28),
  },
  {
    id:'p4',
    title:'555',
    amount:400,
    date:new Date(2024,11,24),
  }
]

function App() {
  return (
    <div className='wrapper'>
      <Newproduct />
      <Product  items = {products}/>
    </div>
  );
}

export default App;
