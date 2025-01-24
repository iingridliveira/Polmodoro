import {  Play } from "phosphor-react";
import { CountdownContainer, FormeContainer, HomeContainer, Separator } from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <form action="">
        <FormeContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input type="task" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" />
          <samp>minutos.</samp>
        </FormeContainer>

        <CountdownContainer>
            <span>0</span>
            <span>0</span>
            <Separator>:</Separator>
            <span>0</span>
            <span>0</span>
        </CountdownContainer>
        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </HomeContainer>
  );
};
