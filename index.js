import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'


import Produto from './models/produto.js'



const app = express()
app.use(express.json())
app.use(cors())



// respond with "hello world" when a GET request is made to the homepage

app.post('/produtos', async (req, res) => {
    const produto = req.body

    const newProduto = await Produto.create(produto)

    return res.status(201).json(newProduto)
  })

app.get('/produtos', async(req, res) => {
  const produtos = await Produto.find()

  res.status(200).json(produtos)
})

app.put('/produtos/:id', async (req, res) => {
  try {
      const produtoId = req.params.id;
      const updatedProdutos = await Produto.findByIdAndUpdate(produtoId, req.body, { new: true });
      if (!updatedProdutos) {
          return res.status(404).send({ message: 'Usuário não encontrado' });
      }
      res.status(200).send(updatedProdutos);
  } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar usuário', error });
  }
})


app.delete('/produtos/:id', async (req, res) => {
  try {
      const produtoId = req.params.id;
      const deletedProduto = await Produto.findByIdAndDelete(produtoId);
      if (!deletedProduto) {
          return res.status(404).send({ message: 'Usuário não encontrado' });
      }
      res.status(200).send({ message: 'Usuário deletado com sucesso' });
  } catch (error) {
      res.status(500).send({ message: 'Erro ao deletar usuário', error });
  }
});


mongoose.connect('mongodb+srv://mf94antonio:NQCbyHmEuEDVEszb@users.9kn5n.mongodb.net/?retryWrites=true&w=majority&appName=users')
.then(() => console.log('Connect'))
.catch(() => console.log('Failled'))


app.listen(7000, () => console.log('Rodando'))