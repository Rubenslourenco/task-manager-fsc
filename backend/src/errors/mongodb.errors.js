export const notFoundError = (res) => {
    return res.status(404).send("este recurso não foi encontrado");
}

