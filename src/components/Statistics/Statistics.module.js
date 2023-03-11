import styled from '@emotion/styled';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  padding: 15px;
  border: 2px solid purple;
  border-radius: 78px;
  background: rgb(124, 121, 173);
  background: linear-gradient(
    90deg,
    rgba(124, 121, 173, 1) 23%,
    rgba(202, 202, 252, 0.6980042016806722) 59%,
    rgba(181, 203, 252, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
`;

export const Paragraph = styled.p`
  font-weight: bold;
  font-size: 18px;
`;
