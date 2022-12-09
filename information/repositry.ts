import { ulid } from 'ulid';
import { Information } from './models';
import { Info as IRecipe } from './interfaces';

const list = async ({ trending = true, popular = true }: any) => {
    return await Information.find({ trending, popular });
}

const store = async (data: IRecipe) => {
    const id = ulid();

    const model = new Information({ ...data, id });

    await model.save();

    return model;
}


const getOne = async (id: string) => {
    return await Information.findOne({ id });
}

const deleteItem = async (id: string) => {
    return await Information.deleteOne({ id });
}


const update = async (id: string, data: IRecipe) => {

    const model = await Information.findOneAndUpdate({ id }, data, { new: true });

    return model;
}

export default {
    list,
    store,
    getOne,
    delete: deleteItem,
    update
}