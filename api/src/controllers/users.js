const {Address,User} = require('../db');

async function createUser (name, lastName, dni, email, celphone, username, password, isAdmin, userAddress) {
    if (!(name && lastName && dni && email && celphone && username && password))
        return res.status(404).send('Falta enviar datos obligatorios del usuario');

    const user = await User.create({name, lastName, dni, email, celphone, username, password, isAdmin});
    await user.setAddress(userAddress);
    return user;
}

async function getAdminUsers() {
    const where = {isAdmin: true};
    const attributes = ['id','username', 'name', 'lastName', 'dni', 'email', 'celphone'];
    const userList = await User.findAll({
        where,
        attributes
    });
    return userList;
}

async function getNonAdminUsers() {
    const where = {isAdmin: false};
    const attributes = ['id','username', 'name', 'lastName', 'dni', 'email', 'celphone'];
    const userList = await User.findAll({
        where,
        attributes
    });
    return userList;
}

async function getUserByUsername(username) {
    const where = {username};
    const attributes = ['id','username', 'name', 'lastName', 'dni', 'email', 'celphone'];
    const user = await User.findOne({
        where,
        attributes
    });
    if (!user) throw new Error('El usuario no existe en la base de datos.');
    return user;
}

async function updateUser(username,userData) {
    const where = {username};
    let user =  await User.findOne({where});
    if (!user) throw new Error('El usuario no existe en la base de datos.');
    return user.set(userData);;
}

async function deleteUser(username) {
    const where = {username};
    if (!user) throw new Error('El usuario no existe en la base de datos.');
    return await User.destroy({where});
}

module.exports={
    createUser,
    getAdminUsers,
    getNonAdminUsers,
    getUserByUsername,
    updateUser,
    deleteUser
};