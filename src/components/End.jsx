import styled from "styled-components";

const EndContainer = styled.section`
  text-align: center;
`;

const End = ({reboot}) => {
  return (
    <EndContainer>
      <h1>VOCÊ PERDEU!</h1>
      <p>Não desanime, tente novamente</p>
      <button onClick={reboot}>REINICIAR</button>
    </EndContainer>
  );
};

export default End;
