import {  Play } from "phosphor-react";
import {
  CountdownContainer,
  FormeContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <form action="">
        <FormeContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput type="task" placeholder="Dê um nome para seu projeto"/>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput type="number" id="minutesAmount"  placeholder="00"/>
          <samp>minutos.</samp>
        </FormeContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <StartCountdownButton disabled type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form> 
    </HomeContainer>
  );
};
