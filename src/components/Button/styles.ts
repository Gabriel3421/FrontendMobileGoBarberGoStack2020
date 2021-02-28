import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const Container = styled(RectButton)`
  /* width: ${width * 0.83}px; */
  /* width: 100%; */
  height: 60px;
  background: #ff9000;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  margin-top: 8px;
`;
export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #312e38;
  font-size: 18px;
`;
