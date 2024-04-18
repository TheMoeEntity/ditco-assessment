
import { Helpers } from "@/Helpers";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {

    const { fullName, phone, email, password } = await req.json()
    const userAgent = req.headers.get('user-agent') || '';
    const deviceDetails = Helpers.parseUserAgent(userAgent)
    const requestType = 'REGT';
    const apiUrl = 'https://datacliq.co.uk/apis';
    const staticToken = process.env.NEXT_PUBLIC_STATIC_TOKEN || 'eyJyNzMyZTEzNGMyMTg5NTEiiOjE1ODAzODQyNTA3MDN9'
    const agentCode = "TBC"
    const userPassword = await Helpers.hashPassword(password)
    const securityKey = Helpers.hashAgentCode(agentCode, staticToken);
    try {
        const data = {
            userAgent: deviceDetails,
            userFullname: fullName + "",
            requestType,
            userPhone: phone === '' ? '08075489362' : phone,
            userMail: email,
            userPassword,
            agentCode,
        }
        console.log(data)
        const response = await axios.post(apiUrl, data, {
            headers: {
                'Content-Type': 'application/json',
                'Security-Key': `${securityKey}`
            }
        });
        const error = response.data
        console.log(response.status + "  " + response.statusText)
        console.log(response.data)
        if (response.status !== 200) {
            return NextResponse.json({ error: "Failed to Sign up user. " + error?.message, message: error.message }, { status: error.statusCode });
        }
        return NextResponse.json({ success: true, data: response.data }, { status: error.statusCode });
    } catch (error) {

        return NextResponse.json({ error: "Failed to create user: " + error }, { status: 500 });
    }
}