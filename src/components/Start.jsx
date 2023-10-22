import styled from "styled-components";

const StartContainer = styled.section`
  text-align: center;
`;

const Start = ({ StartGame }) => {
  return (
    <StartContainer>
      <h1>Descubra a palavra oculta!</h1>
      <button onClick={StartGame}>INICIAR</button>
    </StartContainer>
  );
};

export default Start;
