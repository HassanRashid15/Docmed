import React, { useEffect, useState } from 'react';
import Isotope from 'isotope-layout';
import work1 from "./../Assets/Images/work1.png";
function PortfolioGallery() {
  
    const [activeFilter, setActiveFilter] = useState('*');
    const [grid, setGrid] = useState(null);
  
    useEffect(() => {
      const $grid = new Isotope('.grid', {
        itemSelector: '.all',
        percentPosition: true,
        masonry: {
          columnWidth: '.all'
        }
      });
      setGrid($grid);
  
      return () => {
        // Clean up Isotope instance
        if (grid) {
          grid.destroy();
        }
      };
    }, []);
  
    const handleFilterClick = (filter) => {
      setActiveFilter(filter);
      if (grid) {
        grid.arrange({ filter });
      }
    };
    return (
        <div>
      <div>
        <h1 className='text-center'>Portfolio Gallery</h1>
      </div>
      <section className="portfolio section">
        <div className="container">
          <div className="top-side">
            <h4 className="title">MY WORKS</h4>
            <h2>PORTFOLIO</h2>
          </div>

          <div className="filters">
            <ul>
              <li className={activeFilter === '*' ? 'active' : ''} onClick={() => handleFilterClick('*')}>All</li>
              <li className={activeFilter === '.corporate' ? 'active' : ''} onClick={() => handleFilterClick('.corporate')}>Corporate</li>
              <li className={activeFilter === '.personal' ? 'active' : ''} onClick={() => handleFilterClick('.personal')}>Personal</li>
              <li className={activeFilter === '.agency' ? 'active' : ''} onClick={() => handleFilterClick('.agency')}>Agency</li>
              <li className={activeFilter === '.portal' ? 'active' : ''} onClick={() => handleFilterClick('.portal')}>Portal</li>
            </ul>
          </div>

          <div className="filters-content">
            <div className="row grid">
              {[
                {
                  category: 'corporate',
                  image: require('./../Assets/Images/work1.png'),
                
                },
                {
                  category: 'personal',
                  image: require('./../Assets/Images/work1.png'),
                 
                },
                {
                  category: 'agency',
                  image: require('./../Assets/Images/work1.png'),
         
           
                },
                {
                  category: 'portal',
                  image: require('./../Assets/Images/work1.png'),
                 
                }
              ].map((item, index) => (
                <div key={index} className={`col-sm-4 all ${item.category}`}>
                  <div className="item">
                    <img src={item.image} alt={item.title} />
                    <div className="p-inner">
                      <h5>{item.title}</h5>
                      <div className="cat">{item.category}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default PortfolioGallery
