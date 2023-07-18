import React from 'react';
import Navigation from './Navbar.jsx';
import { Jumbotron } from './home/migration';
import Windmill from '../assets/gallery/windmill.jpg';
import Brown from '../assets/gallery/brown.jpg';
import Bridge from '../assets/gallery/IMG_20230629_232430.jpg';
import Tower from '../assets/gallery/IMG_20230629_232902.jpg';
import Bike from '../assets/gallery/IMG_20230629_233121.jpg';
import Tower2 from '../assets/gallery/IMG_20230630_012758.jpg';
import t1 from '../assets/gallery/t1.jpeg';
import t2 from '../assets/gallery/t2.jpeg';
import t3 from '../assets/gallery/t3.jpeg';

const Gallery = () => {
  return (
    <>
      <Navigation isGalleryPage={true} />

      {/* Upper Jumbotron */}
      <Jumbotron
        fluid
        className="mb-0 text-dark section bg-gray"
        style={{
          background: 'color: ##F5F5F5',
        }}
      >
        <div className="text-center mt-10 pt-5 text-dark bg-white">
          <h1 className="display-4 mb-3 display-3">Welcome to my gallery</h1>
          <p className="lead mb-0 text-dark">
            Here you can just see some of the pictures I took during some of
            my trips, and some of the places I have been to. I thought it would
            be nice to share them. I hope you like them.
          </p>
        </div>
      </Jumbotron>

      {/* Image Gallery */}
      <Jumbotron
        style={{
          background: 'linear-gradient(180deg, #FFFFFF,#88CDF9,#88CDF9,#88CDF9, #88CDF9,#88CDF3, #F5F5F5)',
        }}
        fluid
        id="gallery"
        className=""
      >
        {/* Image cards */}
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            {/* Image card 1 */}
            <div style={{ position: 'relative' }}>
              <a href={Windmill} target="_blank" rel="noopener noreferrer">
                <img
                  src={Windmill}
                  className="w-100 h-auto shadow-1-strong rounded mb-4"
                  alt="Windmill"
                />
              </a>
              <div
                style={{
                  position: 'absolute',
                  top: '5px',
                  left: '10px',
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              >
                Weesp
              </div>
            </div>

            {/* Image card 2 */}
            <div style={{ position: 'relative' }}>
              <a href={Bike} target="_blank" rel="noopener noreferrer">
                <img
                  src={Bike}
                  className="w-100 h-auto shadow-1-strong rounded mb-4"
                  alt="Bike"
                />
              </a>
              <div
                style={{
                  position: 'absolute',
                  top: '5px',
                  left: '10px',
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              >
                Rotterdam
              </div>
            </div>

            {/* Image card 3 */}
            <div style={{ position: 'relative' }}>
              <a href={t1} target="_blank" rel="noopener noreferrer">
                <img
                  src={t1}
                  className="w-100 h-auto shadow-1-strong rounded mb-4"
                  alt="T1"
                />
              </a>
              <div
                style={{
                  position: 'absolute',
                  top: '5px',
                  left: '10px',
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              >
                Taranto
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            {/* Image card 4 */}
            <div style={{ position: 'relative' }}>
              <a href={Brown} target="_blank" rel="noopener noreferrer">
                <img
                  src={Brown}
                  className="w-100 h-auto shadow-1-strong rounded mb-4"
                  alt="Skyscraper"
                />
              </a>
              <div
                style={{
                  position: 'absolute',
                  top: '5px',
                  left: '10px',
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              >
                Rotterdam
              </div>
            </div>

            {/* Image card 5 */}
            <div style={{ position: 'relative' }}>
              <a href={t2} target="_blank" rel="noopener noreferrer">
                <img
                  src={t2}
                  className="w-100 h-auto shadow-1-strong rounded mb-4"
                  alt="T3"
                />
              </a>
              <div
                style={{
                  position: 'absolute',
                  top: '5px',
                  left: '10px',
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              >
                Taranto
              </div>
            </div>

            {/* Image card 6 */}
            <div style={{ position: 'relative' }}>
              <a href={Tower2} target="_blank" rel="noopener noreferrer">
                <img
                  src={Tower2}
                  className="w-100 h-auto shadow-1-strong rounded mb-4"
                  alt="Skyscraper"
                />
              </a>
              <div
                style={{
                  position: 'absolute',
                  top: '5px',
                  left: '10px',
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              >
                Rotterdam
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            {/* Image card 7 */}
            <div style={{ position: 'relative' }}>
              <a href={Bridge} target="_blank" rel="noopener noreferrer">
                <img
                  src={Bridge}
                  className="w-100 h-auto shadow-1-strong rounded mb-4"
                  alt="Bridge"
                />
              </a>
              <div
                style={{
                  position: 'absolute',
                  top: '5px',
                  left: '10px',
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              >
                Rotterdam
              </div>
            </div>

            {/* Image card 8 */}
            <div style={{ position: 'relative' }}>
              <a href={t3} target="_blank" rel="noopener noreferrer">
                <img
                  src={t3}
                  className="w-100 h-auto shadow-1-strong rounded mb-4"
                  alt="T2"
                />
              </a>
              <div
                style={{
                  position: 'absolute',
                  top: '5px',
                  left: '10px',
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              >
                Taranto
              </div>
            </div>

            {/* Image card 9 */}
            <div style={{ position: 'relative' }}>
              <a href={Tower} target="_blank" rel="noopener noreferrer">
                <img
                  src={Tower}
                  className="w-100 h-auto shadow-1-strong rounded mb-4"
                  alt="The Valley"
                />
              </a>
              <div
                style={{
                  position: 'absolute',
                  top: '5px',
                  left: '10px',
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              >
                Amsterdam
              </div>
            </div>
          </div>
        </div>
      </Jumbotron>
    </>
  );
};

export default Gallery;
