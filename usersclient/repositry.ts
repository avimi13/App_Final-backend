import { ulid } from 'ulid';
import { Clients } from './models';
import { Client as IClients } from './interfaces';

const list = async ({ trending = true, popular = true }: any) => {
    return await Clients.find({ trending, popular });
}

const store = async (data: IClients) => {
    const id = ulid();

    const model = new Clients({ ...data, id });

    await model.save();

    return model;
}

const getOne = async (id: string) => {
    return await Clients.findOne({ id });
}

export default {
    list,
    store,
    getOne
}