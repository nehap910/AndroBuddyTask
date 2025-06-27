import React from 'react'

  const clothes = [
  { id: 1, name: 'T-Shirt', price: '$19.99', image: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-color-black.png%3Fv%3D1690003675&w=384&q=75' },

];

function SecondPage() {

  const buttonStyle = {
  background: "#2659B6",
  border: "none",
  padding: "10px 15px",
  borderRadius: "20px",
  cursor: "pointer",
  textAlign:"left"
  };

   const btnStyle = {
  margin: '5px',
  padding: '5px 15px',
  backgroundColor: 'transparent',
  border: '1px solid white',
  color: 'white',
  borderRadius: '20px',
  cursor: 'pointer',
};

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto", }}>
      <h1>Acme Circles T-Shirt</h1>
      <button style={buttonStyle}>$20.00 USD</button>
      <hr />

   <div style={{
  backgroundColor: 'transparent',
  padding: '20px',
  textAlign: 'left',
  width: '200px'
}}>
  <div style={{ marginBottom: '20px' }}>
    <h6>COLOR</h6>
    <button style={btnStyle}>Black</button>
    <button style={btnStyle}>White</button>
    <button style={btnStyle}>Blue</button>
  </div>

  <div>
    <h6>SIZE</h6>
    <button style={btnStyle}>XS</button>
    <button style={btnStyle}>S</button>
    <button style={btnStyle}>M</button>
    <button style={btnStyle}>XL</button>
    <button style={btnStyle}>XXL</button>
    <button style={btnStyle}>XXXL</button>
  </div>
</div>

    <div>
      <button style={{background:"#2659B6",padding:"17px 40px",borderRadius:"30px",color:"white"}}>+ <span style={{padding:"20px"}}></span>   Add To Cart</button>
    </div>


    <div>
<h3 style={{textAlign:"left"}}>Related products</h3>

<div style={{ padding: "20px", maxWidth: "500px", margin: "auto",   backgroundColor: 'black',}}>
    <div>
        {clothes.map((item) => (
          <div key={item.id} style={{ padding: "10px" }}>
            <div
              style={{
                textAlign: "center",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />            
            </div>
          </div>
        ))}
        </div>
      
    </div>

    </div>
    </div>
  )
}

export default SecondPage
