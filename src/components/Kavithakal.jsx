
// const Kavithakal = () => {
//     const [isPlaying, setIsPlaying] = useState(false);

//     const togglePlay = () => {
//         const audioElement = document.getElementById('audioPlayer1');

//         if (isPlaying) {
//             audioElement.pause();
//         } else {
//             audioElement.play();
//         }

//         setIsPlaying(!isPlaying);
//     };

//     return (
//         <div className='kavithakal'><h3>ഒഴുക്ക്- സവിത പാതായ്ക്കര</h3>
//         <audio id="audioPlayer1" src={ ozhukku_Savitha } type="audio/mp3" />
//         <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
//         </div>
    
//     );
// };

// export default Kavithakal;




// import React, { useState } from 'react';
// import './kavithakal.css';
import React, { useState } from 'react';
import './kavithakal.css';
import ozhukku_Savitha from '../Assets/ozhukku_Savitha.mp3';
import Drisyam_Prasanth from '../Assets/Drisyam_Prasanth.mp3';
import Karutha_Swapnam_das from '../Assets/Karutha_Swapnam_das.mp3';
import Drisyam_Savitha from '../Assets/Drisyam_Savitha.mp3';
import Grihapadham_Prasanth from '../Assets/Grihapadham_Prasanth.mp3';
import Mariyam_Shibu from '../Assets/Mariyam_Shibu.mp3';
import Mathiyakuvolam_Rajeev from '../Assets/Mathiyakuvolam_Rajeev.mp3';
import Moksham_Raneej from '../Assets/Moksham_Raneej.mp3';
import Pranayam_Prasanth from '../Assets/Pranayam_Prasanth.mp3';
import Priyanagarame_Prasanth from '../Assets/Priyanagarame_Prasanth.mp3';
import Soojithulayiloode_Shibu from '../Assets/Soojithulayiloode_Shibu.mp3';
import Swapnam_Babu from '../Assets/Swapnam_Babu.mp3';
import Yakshi_Athipatta from '../Assets/Yakshi_Athipatta.mp3';
import Yakshi_Rajeev from '../Assets/Yakshi_Rajeev.mp3';
import Yoga_Prasanth from '../Assets/Yoga_Prasanth.mp3';

const Kavithakal = () => {
    const [currentTrack, setCurrentTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Define an array of objects with display names and corresponding file names
    const trackList = [
        { displayName: 'ഒഴുക്ക്- സവിത പാതായ്ക്കര', fileName: ozhukku_Savitha },
        { displayName: 'ദൃശ്യം- പ്രശാന്ത് ആലയ്ക്കാട്', fileName: Drisyam_Prasanth },
        { displayName: 'കറുത്ത സ്വപ്നം- ദാസ് എം.ഡി', fileName: Karutha_Swapnam_das },
        { displayName: 'ദൃശ്യം-സവിത പാതായ്ക്കര', fileName: Drisyam_Savitha },
        { displayName: 'ഗൃഹപാഠം- പ്രശാന്ത് ആലയ്ക്കാട്', fileName: Grihapadham_Prasanth },
        { displayName: 'മറിയം- ഷാബു ഭാർഗ്ഗവൻ', fileName: Mariyam_Shibu },
        { displayName: 'മതിയാകുവോളം- രാജീവ് കാറൽമണ്ണ', fileName: Mathiyakuvolam_Rajeev },
        { displayName: 'മോക്ഷം- റനീജ് രവീന്ദ്രൻ', fileName: Moksham_Raneej },
        { displayName: 'പ്രണയം- പ്രശാന്ത് ആലയ്ക്കാട്', fileName: Pranayam_Prasanth },
        { displayName: 'പ്രിയ നഗരമേ-പ്രശാന്ത് ആലയ്ക്കാട്', fileName: Priyanagarame_Prasanth },
        { displayName: 'സൂചിത്തുളയിലൂടെ- ഷാബു ഭാർഗ്ഗവൻ', fileName: Soojithulayiloode_Shibu },
        { displayName: 'സ്വപ്നം-ബാബു മണ്ടൂർ', fileName: Swapnam_Babu },
        { displayName: 'യക്ഷി- അത്തിപ്പറ്റ രവി', fileName: Yakshi_Athipatta },
        { displayName: 'യക്ഷി- രാജീവ് കാറൽമണ്ണ', fileName: Yakshi_Rajeev },
        { displayName: 'യോഗ-പ്രശാന്ത് ആലയ്ക്കാട്', fileName: Yoga_Prasanth },
    ];

    const togglePlay = (fileName) => {
        const audioElement = document.getElementById('audioPlayer');

        if (!audioElement) return;

        if (isPlaying && currentTrack === fileName) {
            audioElement.pause();
            setIsPlaying(false);
        } else {
            if (currentTrack !== fileName) {
                audioElement.src = fileName; // Set the audio source from the imported files
                setCurrentTrack(fileName);
            }
            audioElement.play().then(() => {
                setIsPlaying(true);
            }).catch((error) => {
                console.error('Failed to play audio:', error);
                setIsPlaying(false);
            });
        }
    };

    return (
        <div className='kavithakal'>
            <h3>കവിതകൾ</h3>
            {trackList.map((track) => (
                <div>
                <button key={track.fileName} onClick={() => togglePlay(track.fileName)}>
                    {currentTrack === track.fileName && isPlaying ? 'ആലപിക്കുക' : `പ്ലേ ചെയ്യുക ${track.displayName}`}
                </button>
                </div>
            ))}
            <audio id="audioPlayer"></audio>
        </div>
    );
};

export default Kavithakal;
