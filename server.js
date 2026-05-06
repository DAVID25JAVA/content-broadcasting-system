const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const db = router.db;
  const user = db.get("users").find({ email, password }).value();

  if (user) {
    const token = Buffer.from(`${user.id}:${user.role}:${Date.now()}`).toString(
      "base64"
    );

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
      
  } else {
      res.status(401).json({ message: 'Invalid email or password' });
  }
});

server.use('/api', router);


server.listen(5000, () => {
  console.log(' JSON Server running at http://localhost:5000');
});
