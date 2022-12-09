import { Popular } from "./interfaces";
import { CategoriesException } from './exceptions';


const validateRecipeInput = (data: Popular) => {
    if (!data.image) throw new CategoriesException("Property image is missing");
    if (!data.name) throw new CategoriesException("Property name is missing");
    if (data.name.length < 3) throw new CategoriesException("Property name must be at least 3 characters");
    if (data.name.length > 30) throw new CategoriesException("Property name must be at most 20 characters");
   
}

export default {
    validateRecipeInput
}