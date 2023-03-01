import { data } from "../../data/videos";

import * as S from "./styles";

function Home() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Quem está assistindo?</S.Title>
        <S.CardsContainer>
          {data.map((item) => (
            <S.Card key={item.id} to={`/details/${item.id}`}>
              <S.CardImage src={item.image} />
              <S.CardTitle>{item.shortTitle}</S.CardTitle>
            </S.Card>
          ))}
        </S.CardsContainer>
        <S.ButtonContainer>
          <S.Button>Gerenciar perfis</S.Button>
        </S.ButtonContainer>
      </S.Container>
    </S.Wrapper>
  );
}

export default Home;
