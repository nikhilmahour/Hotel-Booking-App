const {default:mongoose}=require('mongoose')

const Appointschema=new mongoose.Schema({
    depart:{
        type:String
    },
    doctor:{
        type:String
    },
    name:{
        type:String
    },
    email:{
        type:String
    },
    date:{
        type:String
    },
    time:{
        type:String
    }


})

const Appoint=mongoose.model('appointment',Appointschema)
module.exports = Appoint