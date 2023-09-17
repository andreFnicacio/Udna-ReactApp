import React from "react";
import {
  Circle,
  CircleText,
  Container,
  Description,
  LeftView,
  RightView,
  Title,
} from "./styled";
interface CardInfoProps {
  circleText: string;
  title: string;
  description: string;
  onPress?: () => void;
}
const CardInfo = ({
  onPress,
  circleText,
  title,
  description,
}: CardInfoProps) => {
  return (
    <Container onPress={onPress}>
      <LeftView>
        <Circle>
          <CircleText>{circleText}</CircleText>
        </Circle>
      </LeftView>
      <RightView>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </RightView>
    </Container>
  );
};

export default CardInfo;
