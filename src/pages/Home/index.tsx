import { Play } from "phosphor-react";
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
          <TaskInput
            type="task"
            list="task-suggrstions"
            placeholder="Dê um nome para seu projeto"
          />

          <datalist id="task-suggrstions">
            <option value="Projeto 1"></option>
            <option value="Projeto 2"></option>
            <option value="Projeto 3"></option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />
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
