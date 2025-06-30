const app= require("./app");
const dotenv= require("dotenv");

const dbConnection=require("./utils/db");
dotenv.config();
console.log('PORT from .env:', process.env.PORT);
//PORT
const PORT = process.env.PORT||8000;
dbConnection();
//server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
