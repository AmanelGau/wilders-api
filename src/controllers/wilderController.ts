import { Request, Response } from 'express';
import WilderModel from '../models/WilderModel';

const WilderController = {
  create: async (req: Request, res: Response) => {
    await WilderModel.init();
    const wilder = new WilderModel(req.body);
    const result = await wilder.save();
    res.json({ success: true, result });
  },
  read: async (req: Request, res: Response) => {
    const result = await WilderModel.find();
    res.json({ success: true, result });
  },
  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const wilder: any = await WilderModel.findByIdAndUpdate(id, req.body);
      await wilder.save();
      res.send(wilder);
    } catch (err: any) {
      console.log(err);
      return res.status(404).send(err.message);
    }
    return undefined;
  },
  delete: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const wilder = await WilderModel.findByIdAndDelete(id);
      res.send(wilder);
    } catch (err: any) {
      console.log(err);
      return res.status(404).send(err.message);
    }
    return undefined;
  },
};

export default WilderController;
