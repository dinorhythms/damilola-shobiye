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
      {/* <audio ref={audioRef} src='/assets/mp3/song.mp3' /> */}
      {/* <audio ref={audioRef} controls className='hidden'>
        <source src='/assets/mp3/song.mp3' type='audio/mp3' />
        Your browser does not support the audio element.
      </audio> */}
      <AudioPlayer
        className='bg-deep-orange-400'
        autoPlay={true}
        loop={true}
        src='/assets/mp3/song.mp3'
        onPlay={(e) => console.log('onPlay')}
        // other props here
      />
    </div>
  );
};

export default MusicPlayer;
