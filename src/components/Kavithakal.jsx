import React, { useState } from 'react';
import kavithaka1 from '../Assets/kavitha1.mp3'
import './kavithakal.css'
const Kavithakal = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        const audioElement = document.getElementById('audioPlayer');

        if (isPlaying) {
            audioElement.pause();
        } else {
            audioElement.play();
        }

        setIsPlaying(!isPlaying);
    };

    return (
        <div className='kavithakal'><h3>kavitha1</h3>
        <audio id="audioPlayer" src={ kavithaka1} type="audio/mp3" />
        <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        </div>
    
    );
};

export default Kavithakal;
