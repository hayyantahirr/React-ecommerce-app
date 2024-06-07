import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import axios from "axios";

function App() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios("https://dummyjson.com/products")
      .then((res) => {
        setProduct(res.data.products);
        console.log(product);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <Navbar />

      {
        <div className="flex flex-wrap justify-center gap-7 mt-16">
          {product ? (
            product.map((item) => {
              return (
                <Card
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  img={item.thumbnail}
                  price={item.price}
                />
              );
            })
          ) : (
            <h1>
              <span className="loading loading-spinner loading-sm"></span>
            </h1>
          )}
        </div>
      }
    </>
  );
}

export default App;
