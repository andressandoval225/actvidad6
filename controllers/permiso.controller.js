const permisoService = require("../services/permiso.service");

const getAll = async (req, res, next) => {
    try {
        const permisos = await permisoService.getAll();

        res.json(permisos);

    } catch (error) {
        next(error);
    }
};


const getById = async (req, res, next) => {
    try {
        const permiso = await permisoService.getById(req.params.id);

        if (!permiso) {
            return res.status(404).json({
                message: "Permiso no encontrado"
            });
        }

        res.json(permiso);

    } catch (error) {
        next(error);
    }
};


const create = async (req, res, next) => {
    try {
        const permiso = await permisoService.create(req.body);

        res.status(201).json(permiso);

    } catch (error) {
        next(error);
    }
};


const update = async (req, res, next) => {
    try {
        const permiso = await permisoService.update(
            req.params.id,
            req.body
        );

        res.json(permiso);

    } catch (error) {
        next(error);
    }
};


const remove = async (req, res, next) => {
    try {
        await permisoService.remove(req.params.id);

        res.json({
            message: "Permiso eliminado correctamente"
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