module.exports = {
    getAll: (req, res) => {
        res.send('get all users');
    },
    createOne: (req, res) => {
        res.send('create one user');
    },
    /* getOne: (req, res) => {
        res.send('get one user');
    }, */
    updateOne: (req, res) => {
        res.send('update one user');
    },
    deleteOne: (req, res) => {
        res.send('delete one user');
    }
};