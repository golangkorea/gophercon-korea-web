import styled from "@emotion/styled";

export const PageContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 60px 20px;
  }
`;

export const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 40px;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;
