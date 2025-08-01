"use client";

import Section from "@/components/Section";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import styled from "styled-components";

const syntaxStyle: { [key: string]: React.CSSProperties } = {
  'code[class*="language-"]': {
    color: "#c5c8c6",
    textShadow: "0 1px rgba(0, 0, 0, 0.3)",
    fontFamily: "'Roboto Mono', Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    fontSize: "26px",
  },
  'pre[class*="language-"]': {
    color: "#c5c8c6",
    textShadow: "0 1px rgba(0, 0, 0, 0.3)",
    fontFamily: "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "80px",
    overflow: "auto",
  },
  ':not(pre) > code[class*="language-"]': {
    background: "#1e1e1e",
    padding: ".1em",
  },
  comment: {
    color: "#6a9955",
  },
  prolog: {
    color: "#6a9955",
  },
  doctype: {
    color: "#6a9955",
  },
  cdata: {
    color: "#6a9955",
  },
  punctuation: {
    color: "#569cd6",
  },
  ".namespace": {
    opacity: ".7",
  },
  property: {
    color: "#ce9178",
  },
  keyword: {
    color: "#569cd6",
  },
  tag: {
    color: "#569cd6",
  },
  "class-name": {
    color: "#FFFFB6",
    textDecoration: "underline",
  },
  boolean: {
    color: "#99CC99",
  },
  constant: {
    color: "#99CC99",
  },
  symbol: {
    color: "#f92672",
  },
  deleted: {
    color: "#ce9178",
  },
  number: {
    color: "#FF73FD",
  },
  selector: {
    color: "#A8FF60",
  },
  "attr-name": {
    color: "@",
  },
  string: {
    color: "#ce9178",
  },
  char: {
    color: "#A8FF60",
  },
  builtin: {
    color: "#569cd6",
  },
  inserted: {
    color: "#A8FF60",
  },
  variable: {
    color: "#C6C5FE",
  },
  operator: {
    color: "##ce9178",
  },
  entity: {
    color: "#FFFFB6",
    cursor: "help",
  },
  url: {
    color: "#96CBFE",
  },
  ".language-css .token.string": {
    color: "#99CC99",
  },
  ".style .token.string": {
    color: "#99CC99",
  },
  atrule: {
    color: "#F9EE98",
  },
  "attr-value": {
    color: "#F9EE98",
  },
  function: {
    color: "#569cd6",
  },
  regex: {
    color: "#E9C062",
  },
  important: {
    color: "#fd971f",
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
};

const FullSection = styled(Section)({
  height: "100vh",
  backgroundColor: "#1e1e1e",
});

const NotFound: React.FC = () => {
  const codeString = `package main

import "fmt"

func main() {
	fmt.Println("Page not found")
}
`;
  return (
    <FullSection>
      <SyntaxHighlighter language={"go"} style={syntaxStyle}>
        {codeString}
      </SyntaxHighlighter>
    </FullSection>
  );
};

export default NotFound;
