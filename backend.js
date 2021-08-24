// Inclusao dos pacotes
const express = require('express')
var mysql = require('mysql2')
const cors = require('cors')
require('dotenv').config()
const path = require('path')

const swaggerUi = require('swagger-ui-express'),
  swaggerDocument = require('./swagger.json')

// Instancia o express
const app = express()
app.use(express.json())
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(express.static(path.join(__dirname, 'build')))

// Definicao de porta
const port = 3000

// Abrindo conexao com base de dados
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB
})

connection.connect()

// Criando um servico
app.post('/candidatos', (req, res) => {
  const {
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
  } = req.body

  // Validacao do CPF
  var sqlCandidatoCpf = ` SELECT cpf FROM candidatos WHERE cpf = '${cpf}'`
  connection.query(sqlCandidatoCpf, function (erro, rows) {
    if (erro) {
      return res.status(400).json(erro)
    }

    if (rows.length > 0) {
      return res.status(422).json({ erro: 'Candidato já possui cadastro' })
    }

    const dia = dataNascimento.split('/')[0]
    const mes = dataNascimento.split('/')[1]
    const ano = dataNascimento.split('/')[2]

    const candidato = {
      nome,
      cargo,
      dataNascimento: new Date(ano, mes - 1, dia),
      estadoCivil,
      sexo,
      telefoneFixo1,
      telefoneFixo2,
      celular,
      contato,
      email,
      identidade,
      cpf,
      veiculo,
      habilitacao
    }

    let idCandidato = 0

    let endereco = {
      logradouro,
      cep,
      bairro,
      cidade,
      uf,
      idCandidato
    }

    InserirCandidato(candidato, endereco)

    return res.json(candidato)
  })
})

function InserirCandidato(candidato, endereco) {
  var sqlCandidato = 'INSERT INTO candidatos SET ?'
  connection.query(sqlCandidato, candidato, function (erro, result) {
    if (erro) {
      return res.status(400).json(erro)
    } else {
      endereco.idCandidato = result.insertId
      InserirEndereco(endereco)
    }
  })
}

function InserirEndereco(endereco) {
  var sqlEndereco = 'INSERT INTO endereco SET ?'
  connection.query(sqlEndereco, endereco, function (erro) {
    if (erro) {
      return res.status(400).json(erro)
    }
  })
}

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// Subindo servidor Node
const listener = app.listen(process.env.PORT || port, () => {
  console.log(`To OK em ${listener.address().port}`)
})
