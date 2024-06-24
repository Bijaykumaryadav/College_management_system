import { useEffect, useState } from "react";
import bg from "../assets/bg.jpeg";
import bg1 from "../assets/bg1.jpeg"; // Import your college images
// import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import { SchoolImage } from "../styles/styles";
const ImageSlider = () => {
      const images = [bg, bg1, bg3]; // Array of images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [images.length]);

    return <SchoolImage src={images[currentImageIndex]} alt="pupils" />;
}

export default ImageSlider;