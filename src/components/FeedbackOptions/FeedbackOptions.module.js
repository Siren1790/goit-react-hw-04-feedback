import styled from '@emotion/styled';

export const Button = styled.button`
  color: #fff;
  padding: 15px 25px;
  border-radius: 100px;
  background-color: #4c43cd;
  background-image: radial-gradient(
      93% 87% at 87% 89%,
      rgba(0, 0, 0, 0.23) 0%,
      transparent 86.18%
    ),
    radial-gradient(
      66% 87% at 26% 20%,
      rgba(255, 255, 255, 0.41) 0%,
      rgba(255, 255, 255, 0) 69.79%,
      rgba(255, 255, 255, 0) 100%
    );
  box-shadow: 2px 19px 31px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  font-size: 12px;

  border: 0;

  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  cursor: pointer;
`;
export const Feedback = styled.div`
  display: flex;
  flex-direction: row;
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
