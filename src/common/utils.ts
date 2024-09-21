export const getMessageCode = (element) => {
    const codes = {
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
            message: 'Internal Server Error',
            code: 500

        },
    }
    return codes[element] ?? getMessageCode('errorServe');
}

