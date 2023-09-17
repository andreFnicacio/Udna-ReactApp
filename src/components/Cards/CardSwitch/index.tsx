import React, { useState } from "react";
import { View, Switch } from "react-native";
import { SwitchView, Container, TitleView, Title, Description } from "./styled";
import colors from "../../../styles/colors";

interface CardSwitchProps {
  title: string;
  description?: string;
  onValueChange: (isEnabled: boolean) => void;
}
const CardSwitch = ({ title, description, onValueChange }: CardSwitchProps) => {
  const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);
  
  return (
    <Container>
      {!!description && <Description>{description}</Description>}
      <SwitchView>
        <TitleView
          style={{
            
          }}
        >
          <Title>{title}</Title>
        </TitleView>
        <View>
          <Switch
            onValueChange={() => {
              setIsSwitchEnabled((prev) => {
                onValueChange(!prev);
                return !prev;
              });
            }}
            thumbColor={colors.white}
            trackColor={{ true: colors.primary }}
            ios_backgroundColor="#3e3e3e"
            value={isSwitchEnabled}
          />
        </View>
      </SwitchView>
    </Container>
  );
};

export default CardSwitch;
