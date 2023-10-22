import styled from "styled-components"

const GameContainer = styled.section`
  margin: 0 auto;
  min-width: 50vw;
  min-height: 20vh;
  box-shadow: 0 0 20px rgb(100 100 100 / 0.3);
  border-radius: 5px;
  padding: 50px;

  div:nth-child(2){
    display: grid;
    grid-template-columns: 2fr auto;
    background-image: linear-gradient(45deg, rgb(255 130 100 /1) 0%, rgb(100 0 200 /1) 100%);
    
    h2 {
      padding: 1rem;
      color: #fff;
    }
  }
  div:nth-child(3){
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    margin-top: 2rem;

    span{
      padding: 0 2rem 0 2rem;
      margin-right: 0.5rem;
      box-shadow: 0 0 4px rgb(100 100 100 / 0.6);
    }

  }
  div:nth-child(4){
    font-weight: 700;
    text-align: center;
  }
  div:nth-child(5){
    display: grid;
    grid-template-columns: 2fr auto;
    background-image: linear-gradient(45deg, rgb(255 130 100 /1) 0%, rgb(100 0 200 /1) 100%);
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    h3{color: #fff;}
  }
`;

const FormLetters = styled.form`

  input {
    width: 46px;
    height: 48px;
    margin-right: 10px;
    border: 2px solid #CCC;
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    text-transform: lowercase;
  }
  button {
  padding: 0;
  width: 50px;
  height: 50px;
  }
`;

const Game = ({ 
  verifyLetter,
  choosenWord,
  choosenCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score
 }) => {
  return (
    <GameContainer>
      <div><h1>ENCONTRE A PALAVRA OCULTA</h1></div>
      <div>
        <h2>Dica: {choosenCategory}</h2>
        <h2>Pontuação: {score}</h2>
      </div>
      <div>
        {letters.map((e,i) =>(
          guessedLetters.includes(e)
            ? ( <span key={i}>{e}</span> )
            : ( <span key={i}>&nbsp;</span> )
        ))}
      </div>
      <div>
        <FormLetters>
          <input type="text" name="letter" maxLength="1" required/>
          <button>+</button>
        </FormLetters>
      </div>
      <div>
        <h3>Letras utilizadas: AB</h3>
        <h3>Tentativas restantes: {guesses}</h3>
      </div>
      <div><button onClick={verifyLetter}>Finalizar</button></div>
    </GameContainer>
  )
}

export default Game