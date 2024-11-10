const helloRoute = (req, res) => {
    res.send("Hello World");
};

const successRoute = (req, res) => {
    res.send("I did it!");
};

const nextRoute = (req, res) => {
    res.send("What's next?");
};

module.exports = {
    helloRoute,
    successRoute,
    nextRoute,
};