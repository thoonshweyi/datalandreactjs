const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let users = [
     {id:1, name:"Aung Aung",email:"aungaung@gmail.com"},
     {id:2, name:"Su Su",email:"susu@gmail.com"},
     {id:3, name:"Kyaw Kyaw",email:"kyawkyaw@gmail.com"},
     {id:4, name:"Nu Nu",email:"nunu@gmail.com"},
     {id:5, name:"Tun Tun",email:"tuntun@gmail.com"},
]

app.listen(PORT,()=>{
     console.log(`Express Server is runing on http://localhost:${PORT}`)
});

// All Users
app.get('/api/users',(req,res)=>{
     res.json(users);
});

// Add New User
app.post("/api/users",(req,res)=>{
     const newuser ={id: Date.now(), ...req.body};
     users.push(newuser);

     res.status(200).json(newuser);
});

// Edit 
app.put("/api/users/:id",(req,res)=>{
     const {id} = req.params;
     users = users.map(user => user.id === id ? {...user,...req.body} : user)
     res.json({message:"Updated"});
});

// Delete User
app.delete("/api/users/:id",(req,res)=>{
     const {id} = req.params;
     users = users.filter(user=>user.id != id);
     res.json({message:"Deleted"});
});
