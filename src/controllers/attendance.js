module.exports = {
    getAll: (req, res) => {
        res.send('get all attendances');
    },
    createOne: (req, res) => {
        res.send('create one attendance');
    },
    /* getOne: (req, res) => {
        res.send('get one attendance');
    }, */
    updateOne: (req, res) => {
        res.send('update one attendance');
    },
    deleteOne: (req, res) => {
        res.send('delete one attendance');
    }
};