import Express from "express";
import cors from "cors";
const app = Express();
app.use(cors);
app.get("/api", (req, res) => {
  res.json({ "users": ["Nihal", "Sheikh", "Khan", "Rizwan", "Ahmed", "Ali", "Ibn", "Imran"] });
});

app.listen(3000, () => console.log("Server started on port 3000"));
