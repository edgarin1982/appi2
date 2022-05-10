const Users = require('./User')



const User ={
    get: async (req, res) =>{
      res.status(200).send('este es un cahnchito')
    },

    list: async (req, res) =>{
        const users = await Users.find()
        res.status(200).send(users)
    },
    create: async (req, res) => {
        console.log(req.body)
        res.status(201).send('Creando un gallito')
    },
    update: async (req, res) =>{
        res.status(204).send('actualizando edgarin')
    },
    destroy: async (req, res) =>{
        res.status(204).send('eliminando Edgarin 😣')
    }
}

module.exports = User