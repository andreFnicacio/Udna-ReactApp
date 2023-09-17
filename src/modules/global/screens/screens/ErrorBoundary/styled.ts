import styled from "styled-components/native";
import colors from "../../../../styles/colors";
import fonts from "../../../../styles/fonts";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;

export const Title = styled.Text`
  margin-top: 40px;
  text-align: center;
  margin-bottom: 24px;
  color: ${colors.purple};
  font-size: ${fonts.size.font22}px;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: ${fonts.size.font16}px;
  font-family: ${fonts.family.regular};
  color: ${colors.gray6};
  margin-bottom: 24px;
  text-align: center;
`;

export const Button = styled.TouchableHighlight`
  background-color: ${colors.white};
  border-radius: 10px;
`;
export const ButtonText = styled.Text`
  margin: 5px;
  color: ${colors.purple};
  font-size: ${fonts.size.font22}px;
`;
