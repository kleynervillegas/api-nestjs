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

const baseRandom = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const random = {
    baseRandom: baseRandom,
    randomPassword: baseRandom+'$@.!%*?&'
};

export const generateRandomText = async (typeRandom='baseRandom', lenghtText=10) => {



        return await random[typeRandom].split('').sort(() => 0.5 - Math.random()).join('').substring(0, lenghtText);

    }



