import Express from "express";
const app = Express();
app.get("/api", (req, res) => {
    res.json({ "users": ["Nihal", "Sheikh", "Khan", "Rizwan", "Ahmed", "Ali", "Ibn", "Imran"] });
});
app.listen(3000, () => console.log("Server started on port 3000"));
//# sourceMappingURL=index.js.map