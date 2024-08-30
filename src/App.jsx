
import './App.css'
import Header from './components/header'
import Card from './components/card'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [products, setProducts] = useState([])
  const [input, setInput] = useState('')
  const [categoryInput, setCategoryinput] = useState('')




// so why we use use effect? 
// cuz it runs after rendering 
// its major use is for api and etc 
// it'll re render after it rendered 
// it runs at the end 

// if we use use state and fetch api there it will stuck in inifity loop 

  useEffect(() => {
    FetchProducts()
   

  }, [])


  function FetchProducts  () {
    fetch("https://fakestoreapi.com/products").then((data) => data.json()).then((product) => setProducts(product))
    // console.log(products);

  }



  // FetchProducts()

  // console.log(products);
  const filtered = products.filter((data) => (
    data.title.toLowerCase().includes(input.toLowerCase()) &&
    data.category.toLowerCase().includes(categoryInput.toLowerCase())
    // console.log(data.title.toLowerCase());
    // console.log(data.id);

  ))
  
  
  return (
    <>
      <Header />
      
      
<input type="text"
        value={input}
        placeholder='Search By Title Here'
        onChange={(e) => {
          setInput(e.target.value)
          // console.log(input);

        }
        } className='mx-auto my-5 border w-1/2 text-2xl shadow border-shadow	 text-center border-black	placeholder-text-black	' />

<input type="text"
        value={categoryInput}
        placeholder='Search By Category Here'
        onChange={(e) => {
          setCategoryinput(e.target.value)
          // console.log(input);

        }
        } className=' my-5 border border-shadow text-2xl shadow border-shadow mx-5	 text-center border-black	placeholder-text-black	' />


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
