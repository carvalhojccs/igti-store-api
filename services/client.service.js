import clientRepository from "../repositories/client.repository.js";

async function createClient(client){
    return await clientRepository.insertClient(client);
}

async function getClients(){
    return await clientRepository.getClients();
}

async function getClient(id) {
    return clientRepository.getClient(id);
}

export default {
    createClient,
    getClients,
    getClient,
}