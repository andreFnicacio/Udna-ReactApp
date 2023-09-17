import styled from "styled-components/native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const Button = styled.TouchableOpacity`

`;

export const Container = styled.View`
  border-radius: 20px;
  background-color: #ffffff;
  opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
  margin-top: 12px;
  margin-bottom: 24px;
  width: 330px;
  margin-right: 200px;
  height: 85px
  flex-direction: row;
  box-shadow: 0 0 2px #000;
  padding: 8px 10px;
  shadow-opacity: 0.27;
  shadow-offset: 0px 3px;
`;

export const LeftView = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;
export const RightView = styled.View`
  flex: 4;
  justify-content: center;
  padding: 0px 0px 0px 8px;
`;

export const Title = styled.Text`
  font-size: ${fonts.size.font18}px;
  color: ${colors.secondary};
  font-weight: 500;
  margin: 16px 16px 16px -20px;
`;
