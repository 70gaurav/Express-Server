import express from "express"

const app = express()

let students = [
    {id:1, name:"gaurav" },
    {id:2, name:"saurav" },
    {id:3, name:"sachin" },
]

app.use(express.json())

app.get("/",(req,res) => {
    res.json(students)
})

app.get('/students/:id', (req, res) => {
    const student = students.find(user => user.id === parseInt(req.params.id));
    if (!student) return res.status(404).send("User not found");
    res.json(student);
  });

app.listen(3000 , () => {
    console.log("server started at 3000")
})