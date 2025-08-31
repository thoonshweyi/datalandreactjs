const express = require('express');
const cors = require('cors'); // Cross-Origin Resource Sharing
const {v4:uuidv4} = require('uuid');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let aboutUsDatas = {
     whyChooseUs: [
          {icon: "fa-solid fa-bolt",title: "Fast Delivery",desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
          {icon: "fa-regular fa-lightbulb",title: "Creative Solution",desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
          {icon: "fa-regular fa-handshake",title: "Client Collaboration",desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
     ],
     coreValues: [
          {title: "Integrity",desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
          {title: "Inovation",desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
          {title: "Customer Focus",desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
          {title: "Excellence",desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
     ]
};

const ClientsSayDatas = [
     {
          name: "Myint Mho",
          role: "CEO, TechSolutions",
          feedback: "The support team was incredibly responseive....",
          raging: 3.2,
          gender: "female",
          avaterId: 30
     },
     {
          name: "Maung Oo",
          role: "Director, Blobal Innovations",
          feedback: "24/7 support the actually responds....",
          raging: 4.5,
          gender: "male",
          avaterId: 45
     },
     {
          name: "Cho Lae",
          role: "MD, Digital Ventures",
          feedback: "We've worked with many support teams....",
          raging: 5,
          gender: "female",
          avaterId: 65
     },
];

app.listen(PORT,()=>{
     console.log(`Express Server is runing on http://localhost:${PORT}`)
});

// All todos

app.get('/api/aboutus',(req,res)=>{
     res.json(aboutUsDatas);
});

// Contact Page
// http://localhost:5000/api/contacts/clientsays

app.get("/api/contacts/clientsays",(req,res)=>{
     res.json(ClientsSayDatas);
})

// http:// localhost:5000/api/contacts/formsubmit
app.get("/api/contacts/formsubmit",(req,res)=>{
     const {name,email,message} = req.body;

     if(!name || !email || !message){
          return res.status(400).json({error:"All fields are required."})
     }
     console.log("Form Datas: ",{name,email,message}); // servers.js terminal

     return res.status(200).json({success:true,message:"Message received."});
})

// 14CS