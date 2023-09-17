import styled from "styled-components/native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const Container = styled.View`
  flex: 1;
`;
export const SwitchView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Description = styled.Text`
  font-size: 16px;
  flex: 1;
  color: ${colors.purple};
  margin: 16px 0px 16px 0;
`;

export const TitleView = styled.View`
  width: 80%;
  padding: 12px;
  background-color: #fff;
  border-radius: 15px;
`;
export const Title = styled.Text`
  font-size: ${fonts.size.font16}px;
  font-family: ${fonts.family.regular};
  color: ${colors.green3};
  text-align: left;
`;
