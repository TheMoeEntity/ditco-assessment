import { Dispatch, ReactNode, SetStateAction } from "react"


export type sideContex = {
    sidebar: boolean
    setSideBar: Dispatch<SetStateAction<boolean>>

}
export type UserProviderType = {
    children: ReactNode
}
export interface IDashBoard {
    title:string
    amount:number
    color:string
    icon:string
    iconColor:string
}