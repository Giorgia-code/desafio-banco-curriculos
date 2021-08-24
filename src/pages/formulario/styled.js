import styled from 'styled-components'

export const Container = styled.div`
  display: block;
  height: 100vh;
  background-color: #00cdcd;
`
export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: 'Poppins', sans-serif;
  color: #fff;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const InputContent = styled.div`
  flex: 1;
`

export const Label = styled.label`
  display: block;
`

export const Select = styled.select`
  border: 1px solid #ddd;
  padding: 0 0.5rem;
  border-radius: 0.25rem 0 0 0.25rem;
  height: 50px;
  width: 300px;
  'Poppins', sans-serif;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`

export const Input = styled.input`
  border: 1px solid #ddd;
  padding: 0 0.5rem;
  border-radius: 0.25rem 0 0 0.25rem;
  height: 50px;
  width: 300px;
  'Poppins', sans-serif;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`
export const InputGrande = styled.input`
  border: 1px solid #ddd;
  padding: 0 0.5rem;
  border-radius: 0.25rem 0 0 0.25rem;
  height: 50px;
  width: 500px;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`
export const Button = styled.button`
  height: 5rem;
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
export const ContentButton = styled.div`
  text-align: center;
`
