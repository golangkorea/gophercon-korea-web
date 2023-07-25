import styled from "@emotion/styled";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

interface AccordionContainerStylesProps {
  active?: boolean;
}

interface ArrowIconStylesProps {
  active?: boolean;
}

const AccordionContainer = styled.div<AccordionContainerStylesProps>(({ active }: AccordionContainerStylesProps) => ({
  width: "100%",
  border: "1px solid #bbb",
  borderRadius: 24,
  marginBottom: 40,
  overflow: "hidden",
  transition: "max-height 0.3s ease-in-out",
  maxHeight: active ? "auto" : 128,
  "@media (max-width: 1000px)": {
    maxHeight: active ? "auto" : 88,
    marginBottom: 20,
  },
}));

const AccordionTitle = styled.h2({
  cursor: "pointer",
  fontSize: 32,
  fontWeight: 600,
  margin: 0,
  padding: 40,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "@media (max-width: 1000px)": {
    fontSize: 24,
    padding: 20,
  },
});

const AccordionContent = styled.div({
  padding: 40,
  fontSize: 24,
  overflow: "hidden",
  "@media (max-width: 1000px)": {
    fontSize: 20,
    padding: 20,
  },
});

const ArrowIcon = styled.div<ArrowIconStylesProps>(({ active }: ArrowIconStylesProps) => ({
  transition: "transform 0.3s ease",
  transform: active ? "rotate(180deg)" : "rotate(0deg)",
}));

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AccordionContainer active={isOpen}>
      <AccordionTitle onClick={() => setIsOpen(!isOpen)}>
        {title}
        <ArrowIcon active={isOpen}>
          <RiArrowDownSLine size={48} />
        </ArrowIcon>
      </AccordionTitle>
      <AccordionContent>{children}</AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
