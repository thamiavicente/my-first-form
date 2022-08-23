import styled from 'styled-components';

type Props = {
  titleText: string;
}

export function Title({titleText}: Props) {
  const Title = styled.h1 `
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    color: #000;
    font-size: 26px;
    margin-bottom: 20px;
    font-weight: bold;
  `

  return (
    <Title
      className="title"
    >
      { titleText }
    </Title>
  )
}