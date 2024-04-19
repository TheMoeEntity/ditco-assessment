import { Dispatch, ReactNode, SetStateAction } from "react"


export type sideContex = {
    sidebar: boolean
    setSideBar: Dispatch<SetStateAction<boolean>>

}
export type UserProviderType = {
    children: ReactNode
}
export interface IDashBoard {
    title: string
    amount: number
    className?:string
    color: string
    icon: string
    iconColor: string
}
export interface DeviceDetails {
    browser: string;
    os: string;
    device: string;
    cpu?: string
    engine?: string
    getOs?: () => any
}