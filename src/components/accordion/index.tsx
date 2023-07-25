import React from "react";
import { HiChevronDown } from "react-icons/hi";
import styled from "styled-components";

type isOpen = {
  isOpen: boolean;
};

const AccordionContainer = styled.div<isOpen>`
  width: 100%;
  border: 1px solid #ddd;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  padding: 0 20px;
  max-height: ${(props) => (props.isOpen ? "200px" : "80px")};
`;

const AccordionTitle = styled.div`
  cursor: pointer;
  height: 80px;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AccordionContent = styled.div`
  padding: 10px 20px 20px 20px;
  font-size: 18px;
  overflow: hidden;
`;

const ArrowIcon = styled.div<isOpen>`
  transition: all 0.3s ease-in-out;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <AccordionContainer isOpen={isOpen}>
      <AccordionTitle onClick={() => setIsOpen(!isOpen)}>
        {title}
        <ArrowIcon isOpen={isOpen}>
          <HiChevronDown size={48} />
        </ArrowIcon>
      </AccordionTitle>
      <AccordionContent>{children}</AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
