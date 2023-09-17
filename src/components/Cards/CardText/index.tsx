import React from "react";
import {
  Container, Title
} from "./styled";
interface CardTextProps {
  text: string;
  onPress: () => void;
}
const CardText = ({ text, onPress }: CardTextProps) => {
  return (
    <Container onPress={onPress}>
      <Title>{text}</Title>
    </Container>
  );
};

export default CardText;
