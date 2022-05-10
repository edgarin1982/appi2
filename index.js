const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://edgarin:260659@cluster1.ms0xt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

const User = mongoose.model('User', {
    username: String,
    edad: Number,
})
const crear = async () => {
    const user = new User({  username: 'Edgar Juárez', edad: 40 })
    const savedUser = await user.save()
    console.log(savedUser);
}

//crear()
const buscarTodo = async () => {
    const users = await User.find()
    console.log(users)

}
//buscarTodo()
const buscar = async ( ) =>{
    const user = await User.find({username: 'Magdalena Ramos'})
    console.log(user)
}
//buscar()

const buscarUno = async ( ) =>{
    const user = await User.findOne({username: 'Magdalena Ramos'})
    console.log(user)
}
//buscarUno()

const actualizar = async ()=> {
    const user = await User.findOne({username: 'Edgar Juarez' })
    console.log(user)
    user.edad = 20
    await user.save()
}
//actualizar()

const eliminar = async () => {
    const user = await User.findOne ({username: 'Edgar Juárez'})
    console.log(user)
    if (user) {
        await user.remove()
        
    }

}
eliminar()