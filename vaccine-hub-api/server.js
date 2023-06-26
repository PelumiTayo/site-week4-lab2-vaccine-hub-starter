const app = require("./app");
const { PORT } = require("../vaccine-registration-api/config")

// const port = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server listening at http://localhost:${PORT}`);
});

//handle all 404 errors
//to hit, put the wrong url
app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((error, req, res, next) => {
  const status = error?.status || 500;
  const message = error.message;
  console.log("catch all");
  return res.status(status).json({
    error: { message, status },
  });
});
