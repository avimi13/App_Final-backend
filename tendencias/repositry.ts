import { ulid } from 'ulid';
import { Tendencia } from './models';
import { Tendencias as ITendencias } from './interfaces';

const list = async ({ trending = true, popular = true }: any) => {
    return await Tendencia.find({ trending, popular });
}

const store = async (data: ITendencias) => {
    const id = ulid();

    const model = new Tendencia({ ...data, id });

    await model.save();

    return model;
}


const getOne = async (id: string) => {
    return await Tendencia.findOne({ id });
}

const deleteItem = async (id: string) => {
    return await Tendencia.deleteOne({ id });
}


const update = async (id: string, data: ITendencias) => {

    const model = await Tendencia.findOneAndUpdate({ id }, data, { new: true });

    return model;
}

export default {
    list,
    store,
    getOne,
    delete: deleteItem,
    update
}