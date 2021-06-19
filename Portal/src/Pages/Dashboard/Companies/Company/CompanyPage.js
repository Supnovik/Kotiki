import React from 'react'
import { Line } from 'react-chartjs-2'

import PieChartSvg from '../../../../assets/svg/pie-chart.svg'
import CoinSvg from '../../../../assets/svg/coin.svg'

import './CompanyPage.scss'

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            label: 'Stock dynamic',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        },
    ],
}

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
}

function CompanyPage() {
    const activities = [
        {
            id: 1,
            name: 'John Doe',
            date: '15 Feb, 2021',
            value: 232,
            currency: '$',
        },
        {
            id: 1,
            name: 'John Doe',
            date: '15 Feb, 2021',
            value: -232,
            currency: '$',
        },
    ]

    return (
        <div className="company-page">
            <div className="company-page__activity">
                <div className="company-page__activity-title">
                    Recent activity
                </div>
                <div className="company-page__activities">
                    {activities.map((activity) => {
                        return (
                            <div className="company-page__activity-one">
                                <div>
                                    <div className="company-page__activity-one-user">
                                        {activity.name}
                                    </div>
                                    <div className="company-page__activity-one-date">
                                        {activity.date}
                                    </div>
                                </div>
                                <div className="company-page__activity-one-value">
                                    {activity.value}
                                    {activity.currency}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="company-page__stock">
                <Line data={data} options={options} />
            </div>

            <div className="company-page__investment">
                <img src={PieChartSvg}></img>
                <div>
                    <div className="company-page__investment-title">
                        Invesment volume
                    </div>
                    <div className="company-page__investment-subtitle">
                        $8.000.000
                    </div>
                </div>
            </div>
            <div className="company-page__fund">
                <img src={CoinSvg}></img>
                <div>
                    <div className="company-page__fund-title">Market value</div>
                    <div className="company-page__fund-subtitle">
                        $17.000.000
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyPage
