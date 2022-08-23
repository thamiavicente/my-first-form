import styled from 'styled-components';

type Props = {
  buttonText: string;
}

export function Button({buttonText}: Props) {
  const Button = styled.button`
    background-color: #1e76d8;
    color: #fff;
    padding: 12px 24px;
    border: 1px #1e76d8 solid;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    
    &:hover {
      background-color: #fff;
      color: #1e76d8;
    }
  `

  return (
    <Button
      className="button"
    >
      { buttonText }
    </Button>
  )
}