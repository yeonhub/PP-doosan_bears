import React from 'react';

const DSImagesUI = ({ images, bigImg, onThumbnail }) => {
    return (
            <div className='gallery'>
                <div className="bigimgbox">
                    <img className='bigimg' src={bigImg} alt="" />
                </div>
                <ul>
                    {
                        images.map((item, idx) =>
                            <li key={idx}><img className='tn' src={item.tn} alt="" onClick={onThumbnail} /></li>
                        )
                    }
                </ul>
            </div>
    );
};

export default DSImagesUI;