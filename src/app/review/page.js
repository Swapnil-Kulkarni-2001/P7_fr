"use client";

import { useSearchParams } from 'next/navigation'
import Chart from 'chart.js/auto';
import { Bar, Line, Pie } from 'react-chartjs-2';
import faker from 'faker';




const review = () => {

    const searchParams = useSearchParams()

    const search = searchParams.get('search_input')

    //

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'review sentiment distribution',
            },
        },
    };

    const labels = ['positive', 'negative'];

    const data = {
        labels,
        datasets: [
            {
                label: ['reviews'],
                data: [10, 30],
                backgroundColor: ['rgba(53, 162, 235, 0.5)', '#ef9a9a'],
            },
        ],
    };

    //

    //
    const data2 = {
        labels: ['positive', 'negative'],
        datasets: [
            {
                label: '# of reviews',
                data: [30, 70],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    //



    return (
        <div className="flex-col h-full px-10 pt-5 pb-10 bg-[#f1f2f5]">
            <h1 className="text-lg font-medium mb-5">Product Info</h1>
            <div className='flex flex-row mb-10'>
                <div className="flex flex-row items-center py-3 px-3 bg-white h-24 mr-5 w-[30rem] border-2 rounded-sm">
                    <div className='h-full'>
                        <h1 className="text-base font-semibold">Samsung S21FE</h1>
                        <p className="text-sm">Product ID : </p>
                    </div>
                    <div className='bg-[#bff3cd] h-full w-[5rem] border-2 ml-auto'>
                    </div>
                </div>
                <div className="flex flex-row items-center py-3 px-3 bg-white h-24 mr-5 w-[30rem] border-2 rounded-sm">
                    <div className='h-full'>
                        <h1 className="text-base font-semibold">20,000</h1>
                        <p className="text-sm">Positive reviews</p>
                    </div>
                    <div className='bg-[#bff3cd] h-full w-[5rem] border-2 ml-auto'>
                    </div>
                </div>
                <div className="flex flex-row items-center py-3 px-3 bg-white h-24 mr-5 w-[30rem] border-2 rounded-sm">
                    <div className='h-full'>
                        <h1 className="text-base font-semibold">25,922</h1>
                        <p className="text-sm">Negative reviews</p>
                    </div>
                    <div className='bg-red-200 h-full w-[5rem] border-2 ml-auto'>
                    </div>
                </div>
            </div>

            <div className="flex flex-row">
                <div className="flex flex-col space-y-5 p-5 bg-white w-[55%]">
                    <div>
                        <Bar options={options} data={data} />
                    </div>

                    <div className="w-[30rem] h-[30rem]">
                        <Pie data={data2} />
                    </div>
                    <div>
                        <Line
                            datasetIdKey='id'
                            data={{
                                labels: ['Jun', 'Jul', 'Aug'],
                                datasets: [
                                    {
                                        id: 1,
                                        label: '',
                                        data: [5, 6, 7, 8, 9, 10],
                                    },
                                    {
                                        id: 2,
                                        label: '',
                                        data: [3, 2],
                                    },
                                ],
                            }}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-[40%] mr-5 p-4 ml-auto bg-white h-[35rem]">
                    <div className="my-3">
                        <h1 className="text-base font-medium">Compare with another product</h1>
                    </div>
                    <div className="flex flex-col bg-gray-200 p-2 mb-5">
                        <h1 className="text-sm my-2">product1</h1>
                        <input placeholder="productId" className="p-2"/>
                    </div>
                    <div className="flex flex-col bg-gray-200 p-2">
                        <h1 className="text-sm my-2">product2</h1>
                        <input placeholder="productId" className="p-2"/>
                    </div>
                    <button className="bg-black text-white px-5 py-2 mt-10">compare</button>
                </div>
            </div>


        </div>
    )

}

export default review;