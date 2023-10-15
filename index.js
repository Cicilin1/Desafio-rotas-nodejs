const express = require('express')
const app = express()
const uuid = require('uuid')

app.use(express.json())

const port = 3001
const demand = []



const printMetodo = (req, res, next) => {
    console.log(`Método da Requisição: ${req.method}`)

    next()
}

app.get('/order',printMetodo, (req, res) => {

    return res.status(201).json(demand)
})

app.post('/order',printMetodo, (req, res) => {
    const { name, clienteName, order, price, status } = req.body

    const purchase = { id: uuid.v4(), name, order, clienteName, price, status: "Em preparação" }

    demand.push(purchase)

    return res.status(201).send("Adicionado")
})

const checkoutID = (req, res, next) => {

    const { id } = req.params

    const index = demand.findIndex(user => user.id === id)

    if (index < 0) {
        return res.status(404).json({ message: "User not found" })
    }

    req.userIndex = index
    req.userID = id

    next()
}

app.put('/order/:id', checkoutID, printMetodo, (req, res) => {
    const index = req.userIndex
    const id = req.userID

    const { order, clienteName, price, status } = req.body

    const attOrder = { id, order, clienteName, price, status }

    demand[index] = attOrder

    return res.status(203).send("Atualizado!")
})

app.delete('/order/:id', checkoutID, printMetodo, (req, res) => {
    const index = req.userIndex

    demand.splice(index, 1)

    return res.status(204).json(demand)
})

app.get('/order/:id', checkoutID, printMetodo, (req, res) => {
    const index = req.userIndex

    return res.status(201).json(demand[index])
})

app.patch('/order/:id', checkoutID, printMetodo, (req, res) => {
    const index = req.userIndex
    const {order, clienteName, price, status  }  = req.body

    const UpdateOrder = demand[index]

    const attOrder = { ...UpdateOrder, status: "Pronto" }

    demand[index] = attOrder

    return res.status(200).json(attOrder)
})

app.listen(port, () => {
    console.log(`📶 Start server, port: ${port}`)
})