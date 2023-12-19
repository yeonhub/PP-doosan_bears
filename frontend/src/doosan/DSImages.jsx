import React, { useContext, useEffect, useState } from 'react';
import { HeaderContext } from './Header';
import DSImagesUI from './DSImagesUI';

const DSImages = () => {
    const { currentPlayer } = useContext(HeaderContext);
    const { images } = currentPlayer;
    const [bigImg, setBigImg] = useState(images[0].tn)

    useEffect(() => {
        setBigImg(images[0].tn);
    }, [images]);

    const onThumbnail = e => {
        setBigImg(e.target.src)
    }

    return <DSImagesUI images={images} bigImg={bigImg} onThumbnail={onThumbnail} />
};

export default DSImages;