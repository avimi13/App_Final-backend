import { Tendencias } from "./interfaces";
import { TendenciasException } from './exceptions';


const validateRecipeInput = (data: Tendencias) => {
    if (!data.nameProduct) throw new TendenciasException("Property name product is missing");
    if (data.nameProduct.length < 3) throw new TendenciasException("Property name product must be at least 3 characters");
    if (data.nameProduct.length > 30) throw new TendenciasException("Property name product must be at most 20 characters");
    if (!data.image) throw new TendenciasException("Property image is missing");
}

export default {
    validateRecipeInput
}