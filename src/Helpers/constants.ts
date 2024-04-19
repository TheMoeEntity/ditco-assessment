import { IDashBoard } from "./types";

export const dashAssets: IDashBoard[] = [
    {
        color: 'bg-green-100',
        amount: 6109287,
        title: 'Total Revenue',
        icon: 'fas fa-money-bill-alt',
        iconColor: 'text-green-500',
        className: `flex bg-[red] items-center justify-center rounded-full w-[56px] h-[56px] bg-green-100`
    },
    {
        color: 'bg-purple-100',
        iconColor: 'text-purple-500',
        amount: 12044324,
        title: 'Total Customer',
        icon: 'fas fa-users',
        className: `flex items-center justify-center rounded-full w-[56px] h-[56px] bg-purple-100`
    },
    {
        color: 'bg-red-100',
        iconColor: 'text-red-500',
        amount: 8343782,
        title: 'Total Transaction',
        icon: 'fas fa-money-check-alt',
        className: `flex items-center justify-center rounded-full w-[56px] h-[56px] bg-red-100`
    },
    {
        color: 'bg-orange-300',
        iconColor: 'text-purple-500',
        amount: 19744324,
        title: 'Total Product',
        icon: 'fas fa-shopping-bag',
        className: `flex items-center justify-center rounded-full w-[56px] h-[56px] bg-purple-100`
    },
]