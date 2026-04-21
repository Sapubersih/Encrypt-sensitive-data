import { Request, Response } from "express";
import { SecureService } from "../services/secureService";

const secureService = new SecureService();

export const saveSecretController = (req: Request, res: Response) => {
  try {
    const { text } = req.body;

    const result = secureService.saveSecret(text);

    res.status(201).json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getSecretController = (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const result = secureService.getSecret(id);

    res.json(result);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
