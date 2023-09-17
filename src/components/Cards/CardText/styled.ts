import styled from "styled-components/native";
import colors from "../../../styles/colors";

export const Container = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: #ffffff;
  margin-top: 12px;
  margin-bottom: 24px;
  flex-direction: row;
  box-shadow: 0 0 2px #000;
  shadow-opacity: 0.27;
  shadow-offset: 0px 3px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${colors.green3};
  margin: 16px;
`;