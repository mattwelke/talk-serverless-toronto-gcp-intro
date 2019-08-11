module.exports.helloworld = function(req, res) {
    res.set('Access-Control-Allow-Origin', 'http://localhost:8080');

    res.send('Hello, World!');
};

module.exports.createtodo = function(req, res) {
    if (req.method === 'OPTIONS') {
        res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.set('Access-Control-Allow-Methods', 'POST');
        res.set('Access-Control-Allow-Headers', 'Content-Type');
        res.send();
        return;
    }

    const todo = req.body;

    res.set('Access-Control-Allow-Origin', 'http://localhost:8080');

    res.json({
        created: todo
    });
};
