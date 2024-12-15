import React from "react";
import "./App.css"; 

const App = () => {
  const images = [
    { id: 1, src: "/images/1.jpg", title: "Ocean" },
  { id: 2, src: "/images/2.jpg", title: "Beach" },
  { id: 3, src: "/images/3.jpg", title: "Forest" },
  { id: 4, src: "/images/4.jpg", title: "Goa Beach" },
  { id: 5, src: "/images/5.jpg", title: "Mirror Hills" },
  { id: 6, src: "/images/6.jpg", title: "Yellow Forest" },
  { id: 7, src: "/images/7.jpg", title: "Mountain" },
  { id: 8, src: "/images/8.jpg", title: "Himalayas" },
  ];

  return (
    <div className="gallery">
      {images.map((image) => (
        <div key={image.id} className="gallery-item">
          <img src={image.src} alt={image.title} />
          <p>{image.title}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
