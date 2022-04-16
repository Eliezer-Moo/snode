module.exports = {
    getAll: (req, res) => {
        res.send('get all members');
    },
    createOne: (req, res) => {
        res.send('create one member');
    },
    /* getOne: (req, res) => {
        res.send('get one member');
    }, */
    updateOne: (req, res) => {
        res.send('update one member');
    },
    deleteOne: (req, res) => {
        res.send('delete one member');
    }
};