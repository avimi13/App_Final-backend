import { Info } from "./interfaces";
import { InforException } from './exceptions';


const validateInformInput = (data: Info) => {
    if (!data.namePlaces) throw new InforException("Property namePlaces is missing");
    if (data.namePlaces .length < 3) throw new InforException("Property namePlaces  must be at least 3 characters");
    if (data.namePlaces .length > 30) throw new InforException("Property namePlaces  must be at most 20 characters");
    if(!data.numberPhone) throw new InforException("Property number is required");
}

export default {
    validateInformInput
}