// import React, {useState,useEffect, useRef} from 'react'


// const Aboutfooter = () => {
// const [num, setNum] = useState (0);

//  useEffect(() => {
//     const incrementNum = () => {
//       if (num < 123) {
//         setNum(prevNum => prevNum + 1);
//       }
//      };

//      if (num < 123) {
//      const timeout = setTimeout(incrementNum, 50);
//      return () => clearTimeout(timeout);
//     }
//   }, [num]);



//   return (
//     <div className='abtfooter-div'>
//        <div className='abtftr-single'>
//          <div>
//           <div className='logo-outer aboutfooter-outer'>
//           <div className='logo-inner aboutfooter-inner'>
//           <i class="fa fa-star "></i>
//           </div>
//           </div>
//           </div>
//           <div>
//             <h5 className='text-heading abtf-head'>OUR EXPERIENCE</h5>
//             <h1 className='about-para abtf-para'>
//                 {num}
//             </h1>
//           </div>
//        </div>

//        <div className='abtftr-single'>
//          <div>
//           <div className='logo-outer aboutfooter-outer'>
//           <div className='logo-inner aboutfooter-inner'>
//           <i class="fa fa-user "></i>
//           </div>
//           </div>
//           </div>
//           <div>
//             <h5 className='text-heading abtf-head'>CAKE SPECIALIST</h5>
//             <h1 className='about-para abtf-para'>
//                {num}
//             </h1>
//           </div>
//        </div>


//        <div className='abtftr-single'>
//          <div>
//           <div className='logo-outer aboutfooter-outer'>
//           <div className='logo-inner aboutfooter-inner'>
//           <i class="fa fa-check "></i>
//           </div>
//           </div>
//           </div>
//           <div>
//             <h5 className='text-heading abtf-head'>COMPLETE PROJECT</h5>
//             <h1 className='about-para abtf-para'>
//               {num}
//             </h1>
//           </div>
//        </div>


//        <div className='abtftr-single'>
//          <div>
//           <div className='logo-outer aboutfooter-outer'>
//           <div className='logo-inner aboutfooter-inner'>
//           <i class="fa fa-mug-hot "></i>
//           </div>
//           </div>
//           </div>
//           <div>
//             <h5 className='text-heading abtf-head'>HAPPY CLIENTS</h5>
//             <h1 className='about-para abtf-para'>
//                {num}
//             </h1>
//           </div>
//        </div>

//     </div>
//   )
// }

// export default Aboutfooter

import React, { useState, useEffect, useRef } from 'react';

const Aboutfooter = () => {
  const [isIntersecting, setIntersecting] = useState(false);
  const [counts, setCounts] = useState([
    { id: 1, icon: 'fa-star', heading: 'OUR EXPERIENCE', target: 100, count: 0 },
    { id: 2, icon: 'fa-user', heading: 'CAKE SPECIALIST', target: 200, count: 0 },
    { id: 3, icon: 'fa-check', heading: 'COMPLETE PROJECT', target: 500, count: 0 },
    { id: 4, icon: 'fa-mug-hot', heading: 'HAPPY CLIENTS', target: 1000, count: 0 },
  ]);
  const aboutFooterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Percentage of visibility to trigger
      }
    );

    if (aboutFooterRef.current) {
      observer.observe(aboutFooterRef.current);
    }

    return () => {
      if (aboutFooterRef.current) {
        observer.unobserve(aboutFooterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      const timers = counts.map(item => {
        if (item.count < item.target) {
          return setInterval(() => {
            setCounts(prevCounts => prevCounts.map(countItem => {
              if (countItem.id === item.id && countItem.count < countItem.target) {
                return { ...countItem, count: countItem.count + 1 };
              }
              return countItem;
            }));
          }, 5);
        }
        return null;
      });

      return () => {
        timers.forEach(timer => {
          if (timer) clearInterval(timer);
        });
      };
    }
  }, [isIntersecting, counts]);

  return (
    <div className='abtfooter-div' ref={aboutFooterRef}>
      {counts.map(item => (
        <div className='abtftr-single' key={item.id}>
          <div className='logo-outer aboutfooter-outer'>
            <div className='logo-inner aboutfooter-inner'>
              <i className={`fa ${item.icon}`}></i>
            </div>
          </div>
          <div>
            <h5 className='text-heading abtf-head'>{item.heading}</h5>
            <h1 className='about-para abtf-para'>
              {item.count}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Aboutfooter;

