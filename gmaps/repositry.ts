import { ulid } from 'ulid';
import { Maps } from './models';
import { MapsCo as IMapsCo } from './interfaces';

const list = async ({ trending = true, popular = true }: any) => {
    return await Maps.find({ trending, popular });
}

const store = async (data: IMapsCo) => {
    const id = ulid();

    const model = new Maps({ ...data, id });

    await model.save();

    return model;
}


const getOne = async (id: string) => {
    return await Maps.findOne({ id });
}

const deleteItem = async (id: string) => {
    return await Maps.deleteOne({ id });
}


const update = async (id: string, data: IMapsCo) => {

    const model = await Maps.findOneAndUpdate({ id }, data, { new: true });

    return model;
}

export default {
    list,
    store,
    getOne,
    delete: deleteItem,
    update,
}