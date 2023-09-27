import React, { useState } from 'react';
import styled from 'styled-components';
import Small from '../typography/Small';
import ClockIcon from '@/components/icons/ClockIcon';
import TextButton from '../buttons/TextButton';

export interface Props {
  type: 'Date' | 'Time';
  is_icon: boolean;
  placeholder: string;
}
const Picker = ({ type, is_icon, placeholder }: Props) => {
  const [value, setValue] = useState(placeholder);
  const [activePicker, setActivePicker] = useState(false);
  const [activeHour, setActiveHour] = useState('00');
  const [activeMin, setActiveMin] = useState('00');
  const hourArr = [];
  for (var i = 0; i <= 24; i++) {
    if (i < 10) {
      hourArr.push('0' + i);
    } else {
      hourArr.push('' + i);
    }
  }
  const minArr = ['00', '30'];
  return (
    <Container>
      <MainSection
        activePicker={activePicker}
        onClick={() => {
          setActivePicker((prev) => !prev);
        }}
      >
        <Small color="border_300">{value}</Small>
        {is_icon && <ClockIcon />}
      </MainSection>
      <PickSection activePicker={activePicker}>
        <TopSection>
          <TimeSection>
            {hourArr.map((item, index) => (
              <Time
                key={index}
                activeTime={activeHour === item}
                onClick={() => {
                  setActiveHour(item);
                }}
              >
                {item}
              </Time>
            ))}
          </TimeSection>
          <TimeSection>
            {minArr.map((item, index) => (
              <Time
                key={index}
                activeTime={activeMin === item}
                onClick={() => {
                  setActiveMin(item);
                }}
              >
                {item}
              </Time>
            ))}
          </TimeSection>
        </TopSection>
        <SaveSection>
          <TextButton
            onClick={() => {
              setValue(`${activeHour} : ${activeMin}`);
              setActivePicker((prev) => !prev);
            }}
            color="text_500"
          >
            확인
          </TextButton>
        </SaveSection>
      </PickSection>
    </Container>
  );
};

export default Picker;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MainSection = styled.div<{ activePicker: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: ${({ activePicker }) =>
    activePicker ? '1px solid blue' : 'none'};
  width: 100%;
`;

const PickSection = styled.div<{ activePicker: boolean }>`
  display: ${({ activePicker }) => (activePicker ? 'flex' : 'none')};
  flex-direction: column;
  height: 100px;
`;

const TimeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow-y: scroll;
`;

const Time = styled.div<{ activeTime: boolean }>`
  cursor: pointer;
  text-align: center;
  background-color: ${({ theme, activeTime }) =>
    activeTime ? theme.color.blue_hover : theme.color.white};
`;

const TopSection = styled.div`
  display: flex;
  height: 90%;
`;

const SaveSection = styled.div`
  display: flex;
`;
