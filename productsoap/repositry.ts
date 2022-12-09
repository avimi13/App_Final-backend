import { ulid } from "ulid";
import { MoreProd } from "./models";
import { MoreProduct as IMoreProduct } from "./interfaces";

const list = async ({ trending = true, popular = true }: any) => {
  return await MoreProd.find({ trending, popular });
};

const store = async (data: IMoreProduct) => {
  const id = ulid();

  const model = new MoreProd({ ...data, id });

  await model.save();

  return model;
};

const getOne = async (id: string) => {
  return await MoreProd.findOne({ id });
};

const deleteItem = async (id: string) => {
  return await MoreProd.deleteOne({ id });
};

const update = async (id: string, data: IMoreProduct) => {
  const model = await MoreProd.findOneAndUpdate({ id }, data, { new: true });

  return model;
};

export default {
  list,
  store,
  getOne,
  delete: deleteItem,
  update,
};
