const mongoose = require('mongoose')



mongoose.connect('mongodb+srv://sivakumarveerasekar98:MgtaiVq6CpUKpG9S@cluster0.jgto2sl.mongodb.net/exprensetracker-dev');

const connection =  mongoose.connection
connection.on('error' , err => console.log(err))
connection.on('connected', () => console.log('MongoDB connection Successfull'))

//MgtaiVq6CpUKpG9S

  