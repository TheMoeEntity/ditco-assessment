import { IDashBoard } from "./types";

export const dashAssets: IDashBoard[] = [
    {
        color: 'bg-green-100',
        amount: 6109287,
        title: 'Total Revenue',
        icon: 'fas fa-money-bill-alt',
        iconColor: 'text-green-500',
    },
    {
        color: 'bg-purple-100',
        iconColor: 'text-purple-500',
        amount: 12044324,
        title: 'Total Customer',
        icon: 'fas fa-users'
    },
    {
        color: 'bg-red-200',
        iconColor: 'text-red-500',
        amount: 8343782,
        title: 'Total Transaction',
        icon: 'fas fa-money-check-alt'
    },
    {
        color: 'bg-purple-100',
        iconColor: 'text-purple-500',
        amount: 19744324,
        title: 'Total Product',
        icon: 'fas fa-shopping-bag'
    },
]