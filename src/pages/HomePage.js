import React from 'react';
import MenuBtnContainer from '../components/MenuBtnContainer';
import SelectPlayerContainer from '../components/SelectPlayerContainer';
import { BtnHeader } from '../styled/BtnHeader.styled';
import { ContainerMenu } from '../styled/ContainerMobile.styled';
import { HeaderHome } from '../styled/HeaderHome.styled';
import { Mark } from '../styled/Mark.styled';

const HomePage = () => {
  return (
    <ContainerMenu>
      <HeaderHome>
        <Mark content="X">X</Mark>
        <Mark content="O">O</Mark>
      </HeaderHome>
      <SelectPlayerContainer />
      <MenuBtnContainer />
    </ContainerMenu>
  );
};

export default HomePage;
