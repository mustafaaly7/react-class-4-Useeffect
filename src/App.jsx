
import './App.css'
import Header from './components/header'
import Card from './components/card'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [products, setProducts] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    FetchProducts()
    // console.log(filtered);
    // console.log(products);

  }, [])


  function FetchProducts  () {
    fetch("https://fakestoreapi.com/products").then((data) => data.json()).then((product) => setProducts(product))
    // console.log(products);

  }



  // FetchProducts()

  // console.log(products);
  const filtered = products.filter((data) => (
    data.title.toLowerCase().includes(input.toLowerCase())

    // console.log(data.title.toLowerCase());
    // console.log(data.id);

  ))
  console.log(products);
  
  return (
    <>
      <Header />
      
      <input type="text"
        value={input}
        placeholder='Search Here'
        onChange={(e) => {
          setInput(e.target.value)
          // console.log(input);

        }
        } className='mx-auto my-5 border w-1/2 text-2xl shadow border-shadow	 text-center border-black	placeholder-text-black	' />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">

            {filtered.map((data) => (
              <Card title={data.title} id={data.id} key={data.id} image={data.image} category={data.category} price = {data.price} />





            ))}

          </div>
        </div>
      </section>



    </>
  )
}

export default App
