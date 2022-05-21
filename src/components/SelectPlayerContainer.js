import React from 'react';
import { SelectPlayerBoxContainer } from '../styled/SelectPlayerBoxContainer.style';
import { TextSelectPlayerBox } from '../styled/TextSelectPlayerBox.styled';
import SelectPlayer from './SelectPlayer';

const SelectPlayerContainer = () => {
  return (
    <SelectPlayerBoxContainer>
      <TextSelectPlayerBox principal={true}>PICK PLAYER 1'S MARK</TextSelectPlayerBox>
      <SelectPlayer />
      <TextSelectPlayerBox>REMEMBER : X GOES FIRST</TextSelectPlayerBox>
    </SelectPlayerBoxContainer>
  );
};

export default SelectPlayerContainer;
