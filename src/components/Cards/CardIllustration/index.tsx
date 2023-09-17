import React from "react";
import {
  Container,
  Button,
  LeftView,
  RightView,
  Title,
} from "./styled";
import { Image } from "react-native";

interface CardIllustrationProps {
  imageURL: string;
  title: string;
  onPress?: () => void;
  disabled: boolean;
}
const CardIllustration = ({
  onPress,
  title,
  imageURL,
  disabled,
}: CardIllustrationProps) => {
  return (
    <Button onPress={onPress} disabled={disabled}>
      <Container disabled={disabled}>
        <LeftView>
          <Image
            style={{
              height: 85,
              width: 82,
              resizeMode: "contain",
              top: 10,
              marginLeft: -39,
              borderRadius: 10,
            }}
            source={{
              uri: imageURL,
            }}
          />
          <Image
            style={{
              height: 20,
              width: 20,
              resizeMode: "contain",
              left: 238,
              top: -20,
              borderRadius: 20,
            }}
            source={{
              uri: "https://udnas3prd-prd.s3.amazonaws.com/icons/ursula/Arrow+1.png",
            }}
          />
        </LeftView>
        <RightView>
          <Title>{title}</Title>
        </RightView>
      </Container>
    </Button>
  );
};

export default CardIllustration;
