// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from 'database/mongoConfig';

type Data = {
  name: string;
  method: string;
  error: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  connectMongo().catch(() => res.status(405).json({ error: "Error in the connection.", method: "", name: "" }));
  const { method } = req;
  switch(method) {
    case 'POST':
      res.status(200).json({ method, name:'POST Request', error: "" });
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end("Method " + method + " not allowed.")

  }
  res.status(200).json({ name: 'John Doe', method: "", error: "" })
}