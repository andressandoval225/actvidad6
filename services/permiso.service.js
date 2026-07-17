const Permiso = require("../models/Permiso");

const getAll = async () => {
    return await Permiso.findAll();
};

const getById = async (id) => {
    return await Permiso.findByPk(id);
};

const create = async (data) => {
    return await Permiso.create(data);
};

const update = async (id, data) => {
    const permiso = await Permiso.findByPk(id);

    if (!permiso) {
        throw new Error("Permiso no encontrado");
    }

    return await permiso.update(data);
};

const remove = async (id) => {
    const permiso = await Permiso.findByPk(id);

    if (!permiso) {
        throw new Error("Permiso no encontrado");
    }

    return await permiso.destroy();
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};