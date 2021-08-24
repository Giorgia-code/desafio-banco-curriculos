import React, { useState } from 'react'
import axios from 'axios'
import * as S from './styled'

export default function Formulario() {
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [estadoCivil, setEstadoCivil] = useState('')
  const [sexo, setSexo] = useState('')
  const [logradouro, setLogradouro] = useState('')
  const [cep, setCep] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [uf, setUF] = useState('')
  const [telefoneFixo1, setTelefoneFixo1] = useState('')
  const [telefoneFixo2, setTelefoneFixo2] = useState('')
  const [celular, setCelular] = useState('')
  const [contato, setContato] = useState('')
  const [email, setEmail] = useState('')
  const [identidade, setIdentidade] = useState('')
  const [cpf, setCpf] = useState('')
  const [veiculo, setVeiculo] = useState('')
  const [habilitacao, setHabilitacao] = useState('')

  function handleEnderecoPorCEP(e) {
    console.log(e.target.value)
    if (e.target.value.length === 8) {
      axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(response => {
        const enderecoResponse = response.data
        setLogradouro(enderecoResponse.logradouro)
        setBairro(enderecoResponse.bairro)
        setCidade(enderecoResponse.localidade)
        setUF(enderecoResponse.uf)
      })
    }
  }

  function handleEnviar() {
    const headers = { 'Content-Type': 'application/json' }
    const json = JSON.stringify({
      nome,
      cargo,
      dataNascimento,
      estadoCivil,
      sexo,
      logradouro,
      cep,
      bairro,
      cidade,
      uf,
      telefoneFixo1,
      telefoneFixo2,
      celular,
      contato,
      email,
      identidade,
      cpf,
      veiculo,
      habilitacao
    })

    axios
      .post('http://localhost:3030/candidatos', json, { headers: headers })
      .then(response => {
        console.log(response)
        if (response.status !== 200) {
          alert('Nao foi possivel completar seu cadastro')
        }
      })
  }

  return (
    <S.Container>
      <form onSubmit={handleEnviar}>
        <S.Title>Dados pessoais</S.Title>
        <S.Content>
          <S.InputContent>
            <S.Label htmlFor="nomeInput">Nome Completo*</S.Label>
            <S.InputGrande
              className="nomeInput"
              value={nome}
              required="*"
              onChange={e => setNome(e.target.value)}
            />
          </S.InputContent>
          <S.InputContent>
            <S.Label htmlFor="cargoInput">Cargo Pretendido*</S.Label>
            <S.InputGrande
              className="cargoInput"
              value={cargo}
              required="*"
              onChange={e => setCargo(e.target.value)}
            />
          </S.InputContent>
        </S.Content>
        <S.Content>
          <S.InputContent>
            <S.Label htmlFor="dataNascimentoInput">Data de Nascimento*</S.Label>
            <S.Input
              className="dataNascimentoInput"
              placeholder="ex: xx/xx/xxxx"
              value={dataNascimento}
              required="*"
              onChange={e => setDataNascimento(e.target.value)}
            />
          </S.InputContent>
          <S.InputContent>
            <S.Label htmlFor="estadocivilSelect">Estado Civil</S.Label>
            <S.Select
              value={estadoCivil}
              onChange={e => setEstadoCivil(e.target.value)}
            >
              <option value="selecione">Selecione</option>
              <option value="solteiro">Solteiro</option>
              <option value="casado">Casado</option>
              <option value="separado">Separado</option>
              <option value="divorciado">Divorciado</option>
              <option value="viuvo">Viúvo</option>
            </S.Select>
          </S.InputContent>
          <S.InputContent>
            <S.Label htmlFor="sexoSelect">Sexo</S.Label>
            <S.Select value={sexo} onChange={e => setSexo(e.target.value)}>
              <option value="selecione">Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </S.Select>
          </S.InputContent>
        </S.Content>
        <S.Content>
          <S.InputContent>
            <S.Label htmlFor="logradouroInput">Logradouro*</S.Label>
            <S.InputGrande
              className="logradouroInput"
              placeholder="ex: Nome da Rua, 56. Bloco 2, Ap 301"
              value={logradouro}
              required="*"
              onChange={e => setLogradouro(e.target.value)}
            />
          </S.InputContent>
          <S.InputContent>
            <S.Label htmlFor="cepInput">CEP*</S.Label>
            <S.Input
              className="cepInput"
              placeholder="Somente números"
              value={cep}
              required="*"
              onChange={e => setCep(e.target.value)}
              onBlur={handleEnderecoPorCEP}
            />
          </S.InputContent>
        </S.Content>
        <S.Content>
          <S.InputContent>
            <S.Label htmlFor="bairroInput">Bairro*</S.Label>
            <S.Input
              className="bairroInput"
              value={bairro}
              required="*"
              onChange={e => setBairro(e.target.value)}
            />
          </S.InputContent>
          <S.InputContent>
            <S.Label htmlFor="cidadeInput">Cidade*</S.Label>
            <S.Input
              className="cidadeInput"
              value={cidade}
              required="*"
              onChange={e => setCidade(e.target.value)}
            />
          </S.InputContent>
          <S.InputContent>
            <S.Label htmlFor="ufInput">UF*</S.Label>
            <S.Input
              className="ufInput"
              value={uf}
              required="*"
              onChange={e => setUF(e.target.value)}
            />
          </S.InputContent>
        </S.Content>
        <S.Content>
          <S.InputContent>
            <S.Label htmlFor="telefoneFixo1Input">Telefone Fixo 1</S.Label>
            <S.Input
              className="telefoneFixo1Input"
              placeholder="Somente números"
              value={telefoneFixo1}
              onChange={e => setTelefoneFixo1(e.target.value)}
            />
          </S.InputContent>
          <S.InputContent>
            <S.Label htmlFor="telefoneFixo2Input">Telefone Fixo 2</S.Label>
            <S.Input
              className="telefoneFixo2Input"
              placeholder="Somente números"
              value={telefoneFixo2}
              onChange={e => setTelefoneFixo2(e.target.value)}
            />
          </S.InputContent>
          <S.InputContent>
            <S.Label htmlFor="celularInput">Celular*</S.Label>
            <S.Input
              className="celularInput"
              placeholder="Somente números"
              value={celular}
              required="*"
              onChange={e => setCelular(e.target.value)}
            />
          </S.InputContent>
        </S.Content>
        <S.Content>
          <S.InputContent>
            <S.Label htmlFor="contatoInput">Contato</S.Label>
            <S.Input
              className="contatoInput"
              value={contato}
              onChange={e => setContato(e.target.value)}
            />
          </S.InputContent>
          <S.InputContent>
            <S.Label htmlFor="emailInput">Email*</S.Label>
            <S.Input
              className="emailInput"
              placeholder="ex:myname@example.com"
              value={email}
              required="*"
              onChange={e => setEmail(e.target.value)}
            />
          </S.InputContent>
        </S.Content>
        <S.Content>
          <S.InputContent>
            <S.Label htmlFor="identidadeInput">Identidade</S.Label>
            <S.Input
              className="identidadeInput"
              placeholder="Somente números"
              value={identidade}
              onChange={e => setIdentidade(e.target.value)}
            />
          </S.InputContent>
          <S.InputContent>
            <S.Label htmlFor="cpfInput">CPF*</S.Label>
            <S.Input
              className="cpfInput"
              placeholder="Somente números"
              value={cpf}
              required="*"
              onChange={e => setCpf(e.target.value)}
            />
          </S.InputContent>
          <S.InputContent>
            <S.Label htmlFor="veiculoSelect">Possui veículo</S.Label>
            <S.Select
              value={veiculo}
              onChange={e => setVeiculo(e.target.value)}
            >
              <option value="selecione">Selecione</option>
              <option value="sim">Sim</option>
              <option value="não">Não</option>
            </S.Select>
          </S.InputContent>
          <S.InputContent>
            <S.Label htmlFor="habilitacaoSelect">Habilitação</S.Label>
            <S.Select
              value={habilitacao}
              onChange={e => setHabilitacao(e.target.value)}
            >
              <option value="selecione">Selecione</option>
              <option value="categoriaA">Categoria A</option>
              <option value="categoriaB">Categoria B</option>
              <option value="categoriaC">Categoria C</option>
              <option value="categoriaD">Categoria D</option>
              <option value="categoriaE">Categoria E</option>
              <option value="outra">Outra Categoria</option>
            </S.Select>
          </S.InputContent>
        </S.Content>
        <S.ContentButton>
          <S.Button type="submit">Enviar</S.Button>
        </S.ContentButton>
      </form>
    </S.Container>
  )
}
