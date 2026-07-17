const rolService = require("../services/rol.service");

const getAll = async (req, res, next) => {
    try {
        const roles = await rolService.getAll();

        res.json(roles);
    } catch (error) {
        next(error);
    }
};


const getById = async (req, res, next) => {
    try {
        const rol = await rolService.getById(req.params.id);

        if (!rol) {
            return res.status(404).json({
                message: "Rol no encontrado"
            });
        }

        res.json(rol);

    } catch (error) {
        next(error);
    }
};


const create = async (req, res, next) => {
    try {
        const rol = await rolService.create(req.body);

        res.status(201).json(rol);

    } catch (error) {
        next(error);
    }
};


const update = async (req, res, next) => {
    try {
        const rol = await rolService.update(
            req.params.id,
            req.body
        );

        res.json(rol);

    } catch (error) {
        next(error);
    }
};


const remove = async (req, res, next) => {
    try {
        await rolService.remove(req.params.id);

        res.json({
            message: "Rol eliminado correctamente"
        });

    } catch (error) {
        next(error);
    }
};


module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};