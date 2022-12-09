import { Places } from "./interfaces";
import { PlacesException } from './exceptions';


const validatePlacesInput = (data: Places) => {
    if (!data.img) throw new PlacesException("Property image is missing");
}

export default {
    validatePlacesInput
}