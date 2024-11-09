import React from 'react';
import "./Gallery.css"
import timg1 from "./image/gallery/timg1.jpg";
import timg2 from "./image/gallery/timg2.jpg";
import timg3 from "./image/gallery/timg3.png";
import timg4 from "./image/gallery/timg4.png";
import timg5 from "./image/gallery/timg5.jpg";
import timg6 from "./image/gallery/timg6.jpg";
import timg7 from "./image/gallery/timg7.jpg";
import timg8 from "./image/gallery/timg8.jpg";
import timg9 from "./image/gallery/timg9.jpg";
import timg10 from "./image/gallery/timg10.jpg";
import timg11 from "./image/gallery/timg11.jpg";
import timg12 from "./image/gallery/timg12.jpg";
import timg13 from "./image/gallery/timg13.jpg";
import timg14 from "./image/gallery/timg14.jpg";
import timg15 from "./image/gallery/timg15.jpg";
import timg16 from "./image/gallery/timg16.jpg";
import timg17 from "./image/gallery/timg17.jpg";
import timg18 from "./image/gallery/timg18.jpg";
import timg19 from "./image/gallery/timg19.jpg";
import timg20 from "./image/gallery/timg20.jpg";
import timg21 from "./image/gallery/timg21.png";

const galleryItems = [
  { id: 1, src: timg1, alt: "Books and apple" },
  { id: 2, src: timg2, alt: "Meal plate" },
  { id: 3, src: timg3, alt: "Mountain lake" },
  { id: 4, src: timg4, alt: "Workspace" },
  { id: 5, src: timg5, alt: "Waterfall" },
  { id: 6, src: timg6, alt: "Image 6" },
  { id: 7, src: timg7, alt: "Image 7" },
  { id: 8, src: timg8, alt: "Image 8" },
  { id: 9, src: timg9, alt: "Image 9" },
  { id: 10, src: timg10, alt: "Image 10" },
  { id: 11, src: timg11, alt: "Image 11" },
  { id: 12, src: timg12, alt: "Image 12" },
  { id: 13, src: timg13, alt: "Image 13" },
  { id: 14, src: timg14, alt: "Image 14" },
  { id: 15, src: timg15, alt: "Image 15" },
  { id: 16, src: timg16, alt: "Image 16" },
  { id: 17, src: timg17, alt: "Image 17" },
  { id: 18, src: timg18, alt: "Image 18" },
  { id: 19, src: timg19, alt: "Image 19" },
  { id: 20, src: timg20, alt: "Image 20" },
  { id: 21, src: timg21, alt: "Image 21" },
];

const Gallery = () => {
  return (
    <>
    <div className="tgallery">
    <h5>Gallery</h5>
    <h1>We Record Memories</h1>
    </div>
    <div className="gallery">
      {galleryItems.map((item) => (
        <div key={item.id} className="gallery-item">
          <img src={item.src} alt={item.alt} />
        </div>
      ))}
      <style jsx>{`
        .gallery {
          column-count: 3;
          column-gap: 10px;
          padding: 20px;
          width:90%;
          margin:auto;
        }
        .gallery-item {
          break-inside: avoid;
          margin-bottom: 10px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .gallery-item img {
          width: 100%;
          display: block;
          transition: transform 0.3s ease;
        }
        .gallery-item:hover img {
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .gallery {
            column-count: 2;
          }
        }
        @media (max-width: 480px) {
          .gallery {
            column-count: 1;
          }
        }
      `}</style>
    </div>
    </>
  );
};

export default Gallery;