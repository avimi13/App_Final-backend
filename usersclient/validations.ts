import { Client } from "./interfaces";
import { ClientException } from './exceptions';


const validateCreatorInput = (data: Client) => {
    if (!data.name) throw new ClientException("Property title is missing");
    if (data.name.length < 3) throw new ClientException("Property title must be at least 3 characters");
    if (data.name.length > 30) throw new ClientException("Property title must be at most 20 characters");
    if (!data.image) throw new ClientException("Property image is missing");
}

export default {
    validateCreatorInput
}