import clientService from "../services/client.service.js";

async function createClient(req, res, next){
    try {
        let client = req.body;

        if(!client.name || !client.cpf || !client.phone || !client.email || !client.address){
            throw new Error("Name, CPF, Phone, E-mail, and Adress is required!");
        }

        res.send( await clientService.createClient(client) );

        logger.info(`POST /client - ${JSON.stringify(client)}`);
    } catch (err) {
        next(err);
    }
}

async function getClients(req, res, next){
    try {
        res.send( await clientService.getClients() );

        logger.info(`GET /client`);
    } catch (err) {
        next(err);
    }
}

async function getClient(req, res, next) {
    try {
        res.send( await clientService.getClient(req.params.id) );
        
        logger.info(`GET /client/${JSON.stringify(req.params.id)}`);
    } catch (err) {
        next(err);
    }
}

async function deleteClient(req, res, next){
    try {
        await clientService.deleteClient(req.params.id);
        res.end()

        logger.info(`DELETE /client/${JSON.stringify(req.params.id)}`);
    } catch (err) {
        next(err)
    }
}

export default {
    createClient,
    getClients,
    getClient,
    deleteClient,
}