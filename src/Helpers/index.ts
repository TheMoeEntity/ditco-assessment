import UAParser from 'ua-parser-js';
import bcrypt from 'bcryptjs';
import { Md5 } from 'ts-md5';

export class Helpers {
    static hashAgentCode(agentCode: string, staticToken: string): string {
        const hashed = Md5.hashStr(agentCode)
        return hashed + '|' + staticToken
    }
    static parseUserAgent(userAgent: string): string {
        const parser = new UAParser(userAgent);
        const result = parser.getResult();
        const browser = result.browser.name || 'Unknown';
        const os = result.os.name || 'Unknown';
        const device = result.device.type || 'Unknown';
        const engine = result.engine.name || 'Unknown';
        const cpu = result.cpu.architecture || 'Unknown';

        return `Browser: ${browser}, OS: ${os}, Device: ${device}, Engine: ${engine}, CPU: ${cpu}`;
    }
    static hashPassword = async (password: string): Promise<string> => {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    }
} 