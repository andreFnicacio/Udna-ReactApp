import React, { useState } from "react";
import { Container, HeaderContainer } from "./styles";

interface AccordionProps<THeader = any, TBody = any> {
  data: Array<{
    header: THeader;
    body: TBody;
  }>;
  isOpenDefault: boolean;
  renderHeader: (arg: THeader) => React.ReactElement;
  renderBody: (arg: TBody) => React.ReactElement;
}
const Accordion = ({
  data = [],
  renderHeader,
  renderBody,
  isOpenDefault = false,
}: AccordionProps) => {
  return (
    <>
      {data.map((item, index) => {
        const [isOpen, setIsOpen] = useState(isOpenDefault);
        return (
          <Container key={index}>
            <HeaderContainer
              onPress={() => {
                setIsOpen((prev) => !prev);
              }}
            >
              {renderHeader(item.header)}
            </HeaderContainer>
            {isOpen && renderBody(item.body)}
          </Container>
        );
      })}
    </>
  );
};

export default Accordion;
