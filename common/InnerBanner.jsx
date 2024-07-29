'use client'
import React from 'react';


const InnerBanner = ({title,info}) => {
  

  return (
      <section className='innerBanner text-center'>
        <div className="container position-relative">
          <div className="col-lg-7 mx-auto ">
            <h1 className='title-xxl fw-bold'>{title}</h1>
            <p className=''>{info}</p>
          </div>
        </div>
      </section>

  );
};

export default InnerBanner;