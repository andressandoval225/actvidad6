const Rol = require("../models/Rol");

const getAll = async () => {
    return await Rol.findAll();
};

const getById = async (id) => {
    return await Rol.findByPk(id);
};

const create = async (data) => {
    return await Rol.create(data);
};

const update = async (id, data) => {
    const rol = await Rol.findByPk(id);

    if (!rol) {
        throw new Error("Rol no encontrado");
    }

    return await rol.update(data);
};

const remove = async (id) => {
    const rol = await Rol.findByPk(id);

    if (!rol) {
        throw new Error("Rol no encontrado");
    }

    return await rol.destroy();
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};