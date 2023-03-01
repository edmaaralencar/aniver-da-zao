import Header from "../../components/Header";

import { BsFillHeartFill, BsFillPlayFill } from "react-icons/bs";
import { useParams } from "react-router";
import { data } from "../../data/videos";

import * as S from "./styles";

const Details = () => {
  const { id } = useParams();

  const videoInfo = data.find((item) => item.id === id);

  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <S.VideoTitle>{videoInfo?.title}</S.VideoTitle>
        <S.Rating>
          <BsFillHeartFill color="#E50815" size={30} />
          <BsFillHeartFill color="#E50815" size={30} />
          <BsFillHeartFill color="#E50815" size={30} />
          <BsFillHeartFill color="#E50815" size={30} />
          <BsFillHeartFill color="#E50815" size={30} />
        </S.Rating>
        <S.Description>{videoInfo?.description}</S.Description>
        <S.Button to={`/videos/${videoInfo?.id}`}>
          <BsFillPlayFill size={30} />
          Assistir
        </S.Button>
        <S.VideoWrapper>
          <video width="100%" height="100%" autoPlay muted>
            <source
              src="https://drive.google.com/uc?export=download&id=1uzQ9DO_Q3pPBRX6iyqRe9Iy7DgoeAE59"
              type="video/mp4"
            />
            {/* <source src="../../assets/video.mp4" type="video/mp4" /> */}
          </video>
        </S.VideoWrapper>
      </S.Container>
    </S.Wrapper>
  );
};

export default Details;
