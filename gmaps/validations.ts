import { MapsCo } from "./interfaces";
import { MapsException } from './exceptions';


const validateMapsInput = (data: MapsCo) => {
    if (!data.name) throw new MapsException("Property name is missing");
    if (data.name.length < 8) throw new MapsException("Property name must be at least 3 characters");
    if (data.name.length > 60) throw new MapsException("Property name must be at most 20 characters");
    if (!data.description) throw new MapsException("Property name is missing");
    if (!data.latitude) throw new MapsException("Property latitude is missing");
    if (!data.longitude) throw new MapsException("Property latitude is missing");
}

export default {
    validateMapsInput
}