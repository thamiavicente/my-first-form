import styled from 'styled-components';

type Props = {
  descriptionText: string;
}

export function Description({descriptionText}: Props) {
  const Description = styled.p `
    color: #9f9f9f;
    font-size: 14px;
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  `

  return (
    <Description
      className="description"
    >
      { descriptionText }
    </Description>
  )
}