import mongoose from 'mongoose'

const configMongodb=(url:string)=>{
   mongoose.connect(url)
   var db=mongoose.connection
   db.on('error',console.error.bind(console,"DB connection error"))
   db.once('open',function(){
    console.log("successfully connected to db")
   })
}

export default configMongodb