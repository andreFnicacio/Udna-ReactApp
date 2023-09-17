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

export const LeftView = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const RightView = styled.View`
  flex: 4;
`;
export const Circle = styled.View`
  background-color: ${colors.green3};
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const CircleText = styled.Text`
  font-size: 16px;
  color: #fff;
  text-align: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${colors.purple};
  margin: 16px 16px 16px 0px;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: ${colors.gray6};
  margin: 0px 16px 16px 0px;
`;
