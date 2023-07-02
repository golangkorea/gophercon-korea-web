// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseT = {
  year: number;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseT>) {
  res.status(200).json({ year: 2023 });
}
