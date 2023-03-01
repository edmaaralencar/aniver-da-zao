import { useRef, useState } from "react";
import { useParams } from "react-router";
import { ImPause2 } from "react-icons/im";
import { FaPlay } from "react-icons/fa";
import { data } from "../../data/videos";

import * as S from "./styles";

const Video = () => {
  const { id } = useParams();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [progress, setProgress] = useState(0);
  const [videoTime, setVideoTime] = useState<any>();
  const [isPlaying, setIsPlaying] = useState(false);

  const videoInfo = data.find((item) => item.id === id);

  const handleProgress = () => {
    const duration = videoRef?.current?.duration;
    const currentTime = videoRef?.current?.currentTime;
    const progress = (currentTime! / duration!) * 100;
    setProgress(progress);
    setVideoTime(videoRef?.current?.duration);
  };

  const handleVideoControl = (control: string) => {
    if (control === "play") {
      videoRef?.current?.play();
      setIsPlaying(true);
    } else if (control === "pause") {
      videoRef?.current?.pause();
      setIsPlaying(false);
    }
  };

  return (
    <S.Wrapper
      onClick={
        isPlaying
          ? () => handleVideoControl("pause")
          : () => handleVideoControl("play")
      }
    >
      <S.Season>
        S1:{videoInfo?.episode} "{videoInfo?.title}"
      </S.Season>
      <S.VideoWrapper>
        <video
          onTimeUpdate={handleProgress}
          ref={videoRef}
          width="100%"
          height="100%"
        >
          <source
            src="https://drive.google.com/uc?export=download&id=1uzQ9DO_Q3pPBRX6iyqRe9Iy7DgoeAE59"
            // src="https://drive.google.com/file/d/1uzQ9DO_Q3pPBRX6iyqRe9Iy7DgoeAE59/view"
            type="video/mp4"
          />
        </video>
      </S.VideoWrapper>
      <S.Items>
        <S.IconWrapper>
          {isPlaying ? (
            <ImPause2
              onClick={() => handleVideoControl("pause")}
              size={40}
              color="#FFFFFF"
            />
          ) : (
            <FaPlay
              onClick={() => handleVideoControl("play")}
              size={40}
              color="#FFFFFF"
            />
          )}
        </S.IconWrapper>
        <S.IconWrapper></S.IconWrapper>
      </S.Items>
    </S.Wrapper>
  );
  // return (
  //   <S.Wrapper>
  //     <S.Season>
  //       S1:{videoInfo?.episode} "{videoInfo?.title}"
  //     </S.Season>
  //     <S.VideoWrapper>
  //       <video
  //         onTimeUpdate={handleProgress}
  //         ref={videoRef}
  //         width="100%"
  //         height="100%"
  //         controls
  //       >
  //         <source src={video} type="video/mp4" />
  //       </video>
  //     </S.VideoWrapper>
  //   </S.Wrapper>
  // );
};

export default Video;
