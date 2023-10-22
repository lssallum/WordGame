import styled from "styled-components";

const EndContainer = styled.section`
  text-align: center;
`;

const End = ({reboot, score}) => {
  return (
    <EndContainer>
      <h1>FIM DE JOGO!</h1>
      <p>Sua pontuação foi {score}</p>
      <button onClick={reboot}>REINICIAR</button>
    </EndContainer>
  );
};

export default End;
