import React from 'react'

const Sales = () => {
    const amount = 6109287
    return (
        <div className='min-w-[300px] no-scrollbar bg-white shadow-md p-8 flex flex-col gap-y-6 items-stretch justify-between border-[1px] rounded-lg overflow-x-scroll'>
            <h2 className='text-3xl font-semibold'>Sales overtime</h2>
            <span className='text-gray-400'>Of the week based on total purchase</span>
            <div className='flex gap-x-3'>
                <span className='text-4xl font-semibold font-satoshi'>
                    {amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                </span>
                <span className='bg-[#D6F7DB] text-sm text-green-800 w-fit h-fit px-2 py-[2px] rounded-md'>
                    +3.4%
                </span>
            </div>
            <div className='flex flex-row gap-x-4'>
                <div className='w-full min-w-[260px] h-[6px] rounded-full bg-purple-600'></div>
                <div className='w-full min-w-[260px] h-[6px] rounded-full bg-green-600'></div>
                <div className='w-full min-w-[260px] h-[6px] rounded-full bg-red-600'></div>
                <div className='w-full min-w-[260px] h-[6px] rounded-full bg-yellow-600'></div>
            </div>
            <div className='flex flex-row gap-x-4'>
                <div className='w-full min-w-[260px] flex flex-col gap-y-5 py-4 px-4 rounded-lg bg-[#F2F5FE]'>
                    <div className='flex gap-x-5 items-center text-sm'>
                        <span className='w-2 h-2 rounded-full bg-purple-600'></span>
                        <span className='text-gray-'>Asset received</span>
                    </div>
                    <div className='flex gap-x-3'>
                        <span className='text-2xl font-semibold font-satoshi'>
                            {(2000).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                        </span>
                        <span className='bg-purple-600 text-sm text-white w-fit h-fit px-2 py-[2px] rounded-md'>
                            +3.4%
                        </span>
                    </div>
                </div>

                <div className='w-full min-w-[260px] flex flex-col gap-y-5 py-4 px-4 rounded-lg bg-[#F1F8F1]'>
                    <div className='flex gap-x-5 items-center text-sm'>
                        <span className='w-2 h-2 rounded-full bg-green-600'></span>
                        <span className='text-gray-'>Asset received</span>
                    </div>
                    <div className='flex gap-x-3'>
                        <span className='text-2xl font-semibold font-satoshi'>
                            {(2000).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                        </span>
                        <span className='bg-green-600 text-sm text-white w-fit h-fit px-2 py-[2px] rounded-md'>
                            +3.4%
                        </span>
                    </div>
                </div>
                <div className='w-full min-w-[260px] flex flex-col gap-y-5 py-4 px-4 rounded-lg bg-[#FFECEF]'>
                    <div className='flex gap-x-5 items-center text-sm'>
                        <span className='w-2 h-2 rounded-full bg-red-600'></span>
                        <span className='text-gray-'>Asset received</span>
                    </div>
                    <div className='flex gap-x-3'>
                        <span className='text-2xl font-semibold font-satoshi'>
                            {(2000).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                        </span>
                        <span className='bg-red-600 text-sm text-white w-fit h-fit px-2 py-[2px] rounded-md'>
                            +3.4%
                        </span>
                    </div>
                </div>
                <div className='w-full flex min-w-[260px] flex-col gap-y-5 py-4 px-4 rounded-lg bg-[#FFECD6]'>
                    <div className='flex gap-x-5 items-center text-sm'>
                        <span className='w-2 h-2 rounded-full bg-yellow-600'></span>
                        <span className='text-gray-'>Asset received</span>
                    </div>
                    <div className='flex gap-x-3'>
                        <span className='text-2xl font-semibold font-satoshi'>
                            {(2000).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                        </span>
                        <span className='bg-yellow-600 text-sm text-white w-fit h-fit px-2 py-[2px] rounded-md'>
                            +3.4%
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sales