import React from 'react';

const SlideItem = ({slider}) => {
    return (
        <div className='w-full mx-auto'>
            <img src={slider} alt="" />
        </div>
    );
};

export default SlideItem;