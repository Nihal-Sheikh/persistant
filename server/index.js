const Express = require("express");
const app = Express();

app.get("/api", (req, res) => {
    res.send("Hello World! I am a fullstack developer");
});

app.listen(3000, () => console.log("Server started on port 3000"));