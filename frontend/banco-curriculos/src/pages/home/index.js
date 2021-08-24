import React from 'react'
import * as S from './styled'
import { useHistory } from 'react-router-dom'

function App(props) {
  const history = useHistory()

  function handleFormulario() {
    history.push('/formulario')
  }

  return (
    <body>
      <S.HomeContainer>
        <S.HomeHeader>JobsNET</S.HomeHeader>
        <S.Paragraph>
          Preencha o formulário abaixo e vamos te conectar com as melhores vagas
          de emprego.
        </S.Paragraph>
        <S.Button type="button" onClick={handleFormulario}>
          Formulário
        </S.Button>
      </S.HomeContainer>
    </body>
  )
}

export default App
