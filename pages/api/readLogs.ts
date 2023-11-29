// pages/api/readLogs.js
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

import { execSync } from 'child_process'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // res.status(200).json({ text: 'Hello' });

    try {
        // Adjust the path to the file you want to read
        const filePath = path.join(process.cwd(), 'logs', '8a8078ae-1468-4506-912a-482026c23b1a.log');
        console.log(filePath)
        // const data = fs.readFileSync(filePath, 'utf8');


        const command = `jq . ${filePath}`;
        const output = execSync(command, {
            encoding: 'utf-8',
            maxBuffer: 1024 * 1024 * 50
        });

        // console.log(output)

        res.status(200).json({ data: output });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}
