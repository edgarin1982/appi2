const User ={
    get: (req, res) =>{
      res.status(200).send('este es un cahnchito')
    },

    list: (req, res) =>{
        res.status(200).send('Hola Edgarin')
    },
    create: (req, res) => {
        res.status(201).send('Creando un gallito')
    },
    update: (req, res) =>{
        res.status(204).send('actualizando edgarin')
    },
    destroy: (req, res) =>{
        res.status(204).send('eliminando Edgarin 😣')
    }
}

module.exports = User