/* eslint-disable react/prop-types */
import { HandThumbUpIcon, HandThumbDownIcon } from '@heroicons/react/24/outline';
import styled from 'styled-components';

interface JokeProps {
    setup: string;
    punchline: string;
    showRating: boolean;
}

const JokeStyled = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px 20px;
  width: 400px;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  box-shadow: 0px 0px 49px -35px rgba(0,0,0,0.75);

  .joke__body {
    font-size: .875rem;
  }

  .joke__rating {
    display: flex;

    &__icon {
      padding: 10px;
      width: 24px;
      height: 24px;
      color: #3eb4cd;
      background-color: white;
      border-radius: 50%;
      cursor: pointer;
      transition-property: transform background-color;
      transition-duration: 200ms;

      &:hover {
        background-color: #ade4eb79;
        transform: scale(98%);
      }
    }
  }
`

export const Joke: React.FC<JokeProps> = ({ setup, punchline, showRating = false }) => (
  <JokeStyled>
    <div className="joke__body">
      <p className="joke__body__setup">{setup}</p>
      <p className="joke__body__punchline">{`>> ${punchline}`}</p>
    </div>
    {showRating && (
      <div className="joke__rating">
        <div className="joke__rating__icon"><HandThumbUpIcon /></div>
        <div className="joke__rating__icon"><HandThumbDownIcon /></div>
      </div>
    )}
  </JokeStyled>
);
