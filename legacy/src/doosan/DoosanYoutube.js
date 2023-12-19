import React from 'react';
import YouTube from 'react-youtube';

const DoosanYoutube = ({ data }) => {
    const { no, name, youtube } = data
    return (
        <div className='youtube'>
            <p className='noth'>두산베어스 NO.{no}</p>
            <p className='nameth'>{name}</p>
            <ul className='youtubeUl'>
                {
                    youtube.map((item, idx) =>
                        <li key={idx}>
                            <YouTube
                                videoId={item.yt}
                                opts={{
                                    width: "650",
                                    height: "315",
                                    playerVars: {
                                        showinfo: 0,
                                        autoplay: 0,
                                        rel: 0,
                                        modestbranding: 1,
                                    },
                                }}
                            />
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default DoosanYoutube;