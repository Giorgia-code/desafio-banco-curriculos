import styled from 'styled-components'

export const HomeHeader = styled.header`
  font-size: 200px;
  text-alin: justify;
  font-family: 'Poppins', sans-serif;
  color: #008b8b;
`

export const HomeContainer = styled.div`
  height: 100%;
  weidht: 100%;
  background-color: #00cdcd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Button = styled.button`
  height: 2rem;
  border: 1px solid #000;
  background: #008b8b;
  color: #fff;
  border-radius: 0 0.25rem 0.25rem 0;
  cursor: pointer;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`
export const Paragraph = styled.p`
  font-family: 'Poppins', sans-serif;
  height: 2rem
  color: #fff;
  text-align: center;
`
