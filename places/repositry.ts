import { ulid } from 'ulid';
import { Place } from './models';
import { Places as IPlaces } from './interfaces';

const list = async ({ trending = true, popular = true }: any) => {
    return await Place.find({ trending, popular });
}

const store = async (data: IPlaces) => {
    const id = ulid();

    const model = new Place({ ...data, id });

    await model.save();

    return model;
}


const getOne = async (id: string) => {
    return await Place.findOne({ id });
}

const deleteItem = async (id: string) => {
    return await Place.deleteOne({ id });
}


const update = async (id: string, data: IPlaces) => {

    const model = await Place.findOneAndUpdate({ id }, data, { new: true });

    return model;
}

export default {
    list,
    store,
    getOne,
    delete: deleteItem,
    update
}