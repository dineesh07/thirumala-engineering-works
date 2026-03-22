import React from 'react';
import ashokImg from '../assets/carousel/ashok_leyland_logo.svg.png';
import bajajImg from '../assets/carousel/bajaj_auto_ltd_logo.svg.png';
import larsenImg from '../assets/carousel/larsen__toubro_logo.svg.png';
import tataImg from '../assets/carousel/tata_steel_logo.svg.png';
import tvsImg from '../assets/carousel/tvs_motor_company_logo.svg.png';

const brands = [
  { name: 'Bajaj', img: bajajImg },
  { name: 'Ashok Leyland', img: ashokImg },
  { name: 'Larsen & Toubro', img: larsenImg },
  { name: 'TATA', img: tataImg },
  { name: 'TVS', img: tvsImg },
];

const BrandsCarousel = () => {
  return (
    <section className="brands-carousel-section">
      <div className="carousel-track-container">
        <div className="carousel-track">
          {/* First set of logos */}
          {brands.map((brand, idx) => (
            <div className="carousel-item" key={`set1-${idx}`}>
              <img src={brand.img} alt={brand.name} />
            </div>
          ))}
          {/* Duplicated set for infinite loop effect */}
          {brands.map((brand, idx) => (
            <div className="carousel-item" key={`set2-${idx}`}>
              <img src={brand.img} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsCarousel;
