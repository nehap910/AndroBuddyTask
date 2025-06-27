import React, {useRef} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SecondPage from './SecondPage';

  const clothes = [
  { id: 1, name: 'T-Shirt', price: '$19.99', image: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=1080&q=75' },
  { id: 2, name: 'Jeans', price: '$49.99', image: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-2.png%3Fv%3D1689798965&w=1080&q=75' },
  { id: 3, name: 'Hoodie', price: '$39.99', image: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-circles-blue.png%3Fv%3D1690003396&w=1080&q=75' },
  
];

function FrontPage() {

  const sliderRef = useRef(null);


 const settings = {
  dots: false,
  infinite: true,   
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};




  const buttonStyle = {
    fontSize:"50px",
  background: "transparent",
  color: "white",
  border: "none",
  padding: "10px 15px",
  borderRadius: "5px",
  cursor: "pointer",

};
  return (
   <>
     <div style={{ padding: "20px", maxWidth: "500px", margin: "auto", }}>
     <Slider ref={sliderRef} {...settings}>
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
              <div style={{ marginBottom: "10px" }}>
        <button onClick={() => sliderRef.current.slickPrev()} style={buttonStyle}>← </button> 
        <button onClick={() => sliderRef.current.slickNext()} style={buttonStyle}> →</button>
      </div>
             
            </div>
          </div>
        ))}
      </Slider>
    </div>
    <SecondPage />
    </>
  );
}

export default FrontPage
