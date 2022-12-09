import { ulid } from 'ulid';
import { Populares } from './models';
import { Popular as IPopular } from './interfaces';

const list = async ({ trending = true, popular = true }: any) => {
    return await Populares.find({ trending, popular });
}

const store = async (data: IPopular) => {
    const id = ulid();

    const model = new Populares({ ...data, id });

    await model.save();

    return model;
}


const getOne = async (id: string) => {
    return await Populares.findOne({ id });
}

const deleteItem = async (id: string) => {
    return await Populares.deleteOne({ id });
}


const update = async (id: string, data: IPopular) => {

    const model = await Populares.findOneAndUpdate({ id }, data, { new: true });

    return model;
}

export default {
    list,
    store,
    getOne,
    delete: deleteItem,
    update
}