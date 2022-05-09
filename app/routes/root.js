module.exports = (app) => {
    app.use("/", require("./index"));
    app.use("/main", require("./main"));
    app.use("/menu", require("./menu"));
    app.use("/about", require("./about"));
    app.use("/cart", require("./cart"));
    app.use("/login", require("./login"));
    app.use("/register", require("./registration"));
    app.use("/admin", require("./admin"));
};