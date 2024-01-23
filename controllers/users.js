const users = require('../data/index');

module.exports = {

    list: (req, res) => {

        res.json(users);
    
    },

    show: (req, res) => {

       
    
        const user = users.find(user => user.id == req.params.id);

        if (user) {

            res.json(user);

        } else {

            res.status(404).json({ error: 'User not found' });

        }
    
    
    },

    create: (req, res) => {

        
    
        const newUsers = {
    
            ...req.body,

            id: users.length + 1
    
        };
    
        users.push(newUsers);
    
        res.json(newUsers);
    
    
    },

    edit: (req, res) => {

        let user = users.find(user => user.id == req.params.id);

        if (user) {

            user = {

                ...users,

                ...req.body
                
            };

            users[user.id - 1] = user;

            res.json(user);

        } else {

            res.status(404).json({ error: 'User not putted' });
        }


    },

    delete: (req, res) => {

        const user = users.findIndex(user => user.id == req.params.id)


            if (user !== -1) {

                const deleteUser = users.splice(user, 1);

                res.json(deleteUser);

                } else {

                    res.status(404).json({ error: 'User could not found' });
                    
                }
    }

}