const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;


let rolesValidos = {
    values: ['USER_ROLE', 'ADMIN_ROLE'],
    message: '{VALUE} no es un rol valido'
}
let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario.']
    },
    mail: {
        type: String,
        unique: true,
        required: [true, 'El mail es necesario.']
    },
    password: {
        type: String,
        required: [true, 'El password es necesario.']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    estado: {
        default: true,
        type: Boolean
    },
    google: {
        default: false,
        type: Boolean
    }
});

usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObj = user.toObject();
    delete userObj.password;
    return userObj;
}

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} existente.' });
module.exports = mongoose.model('Usuario', usuarioSchema);