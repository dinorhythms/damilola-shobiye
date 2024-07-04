'use client';
import { useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const MusicPlayer = () => {
  const audioRef: any = useRef();

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
    } else {
      // Throw error
      console.log('cannot play music');
    }
  };
  return (
    <div className='sticky bottom-0 bg-deep-orange-400 w-full'>
      <AudioPlayer
        className='bg-deep-orange-400'
        autoPlay={true}
        loop={true}
        src='/assets/mp3/nosa-song.mp3'
        onPlay={(e) => console.log('onPlay')}
        // other props here
      />
    </div>
  );
};

export default MusicPlayer;
