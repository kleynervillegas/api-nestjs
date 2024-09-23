export const getMessageCode = (value) => {
    const element = {
        success:
        {
            message: 'Operación exitosa',
            code: 200

        },

        badRequest:
        {
            message: 'El envío de la información no se pudo completar',
            code: 500

        },
        Unauthorized:
        {
            message: 'Perfil no autorizado',
            code: 401

        },
        errorServe:
        {
            message: 'Error interno del servidor',
            code: 500

        },
    }
    return element[value] ?? getMessageCode('errorServe');
}

