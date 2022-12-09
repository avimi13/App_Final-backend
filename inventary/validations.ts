import { Inventary } from "./interfaces";
import { InventaryException } from './exceptions';


const validateRecipeInput = (data: Inventary) => {
    if (!data.name) throw new InventaryException("Property name is missing");
    if (data.name.length < 3) throw new InventaryException("Property name must be at least 3 characters");
    if (data.name.length > 30) throw new InventaryException("Property name must be at most 20 characters");
    if (!data.service ) throw new InventaryException("Property service is missing");
    if (!data.description) throw new InventaryException("Property description is missing");

}

export default {
    validateRecipeInput
}