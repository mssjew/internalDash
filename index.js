const newsData = [
    {
    "title": "MPC Member Pill Speaks",
    "country": "GBP",
    "date": "2023-01-08T08:00:00-05:00",
    "impact": "Low",
    "forecast": "",
    "previous": ""
    },
    {
    "title": "Bank Holiday",
    "country": "JPY",
    "date": "2023-01-08T19:00:00-05:00",
    "impact": "Holiday",
    "forecast": "",
    "previous": ""
    },
    {
    "title": "Building Approvals m/m",
    "country": "AUD",
    "date": "2023-01-08T19:30:00-05:00",
    "impact": "Low",
    "forecast": "0.1%",
    "previous": "-6.0%"
    },
    {
    "title": "Unemployment Rate",
    "country": "CHF",
    "date": "2023-01-09T01:45:00-05:00",
    "impact": "Low",
    "forecast": "2.1%",
    "previous": "2.0%"
    },
    {
    "title": "German Industrial Production m/m",
    "country": "EUR",
    "date": "2023-01-09T02:00:00-05:00",
    "impact": "Low",
    "forecast": "0.2%",
    "previous": "-0.1%"
    },
    {
    "title": "French Trade Balance",
    "country": "EUR",
    "date": "2023-01-09T02:45:00-05:00",
    "impact": "Low",
    "forecast": "-11.3B",
    "previous": "-12.2B"
    },
    {
    "title": "Foreign Currency Reserves",
    "country": "CHF",
    "date": "2023-01-09T03:00:00-05:00",
    "impact": "Low",
    "forecast": "",
    "previous": "790B"
    },
    {
    "title": "Italian Monthly Unemployment Rate",
    "country": "EUR",
    "date": "2023-01-09T04:00:00-05:00",
    "impact": "Low",
    "forecast": "7.8%",
    "previous": "7.8%"
    },
    {
    "title": "Sentix Investor Confidence",
    "country": "EUR",
    "date": "2023-01-09T04:30:00-05:00",
    "impact": "Low",
    "forecast": "-18.1",
    "previous": "-21.0"
    },
    {
    "title": "Unemployment Rate",
    "country": "EUR",
    "date": "2023-01-09T05:00:00-05:00",
    "impact": "Low",
    "forecast": "6.5%",
    "previous": "6.5%"
    },
    {
    "title": "Building Permits m/m",
    "country": "CAD",
    "date": "2023-01-09T08:30:00-05:00",
    "impact": "Low",
    "forecast": "0.4%",
    "previous": "-1.4%"
    },
    {
    "title": "MPC Member Pill Speaks",
    "country": "GBP",
    "date": "2023-01-09T10:30:00-05:00",
    "impact": "Low",
    "forecast": "",
    "previous": ""
    },
    {
    "title": "Consumer Credit m/m",
    "country": "USD",
    "date": "2023-01-09T15:00:00-05:00",
    "impact": "Low",
    "forecast": "25.0B",
    "previous": "27.1B"
    },
    {
    "title": "Tokyo Core CPI y/y",
    "country": "JPY",
    "date": "2023-01-09T18:30:00-05:00",
    "impact": "Low",
    "forecast": "3.8%",
    "previous": "3.6%"
    },
    {
    "title": "Household Spending y/y",
    "country": "JPY",
    "date": "2023-01-09T18:30:00-05:00",
    "impact": "Low",
    "forecast": "0.6%",
    "previous": "1.2%"
    },
    {
    "title": "BRC Retail Sales Monitor y/y",
    "country": "GBP",
    "date": "2023-01-09T19:01:00-05:00",
    "impact": "Low",
    "forecast": "2.4%",
    "previous": "4.1%"
    },
    {
    "title": "French Industrial Production m/m",
    "country": "EUR",
    "date": "2023-01-10T02:45:00-05:00",
    "impact": "Low",
    "forecast": "0.9%",
    "previous": "-2.6%"
    },
    {
    "title": "M2 Money Supply y/y",
    "country": "CNY",
    "date": "2023-01-10T04:05:00-05:00",
    "impact": "Low",
    "forecast": "12.4%",
    "previous": "12.4%"
    },
    {
    "title": "New Loans",
    "country": "CNY",
    "date": "2023-01-10T04:05:00-05:00",
    "impact": "Low",
    "forecast": "1150B",
    "previous": "1210B"
    },
    {
    "title": "10-y Bond Auction",
    "country": "GBP",
    "date": "2023-01-10T05:02:00-05:00",
    "impact": "Low",
    "forecast": "",
    "previous": "3.33|2.2"
    },
    {
    "title": "BOC Gov Macklem Speaks",
    "country": "CAD",
    "date": "2023-01-10T05:10:00-05:00",
    "impact": "High",
    "forecast": "",
    "previous": ""
    },
    {
    "title": "BOJ Gov Kuroda Speaks",
    "country": "JPY",
    "date": "2023-01-10T05:10:00-05:00",
    "impact": "Medium",
    "forecast": "",
    "previous": ""
    },
    {
    "title": "NFIB Small Business Index",
    "country": "USD",
    "date": "2023-01-10T05:59:00-05:00",
    "impact": "Low",
    "forecast": "91.6",
    "previous": "91.9"
    },
    {
    "title": "Fed Chair Powell Speaks",
    "country": "USD",
    "date": "2023-01-10T09:00:00-05:00",
    "impact": "High",
    "forecast": "",
    "previous": ""
    },
    {
    "title": "Final Wholesale Inventories m/m",
    "country": "USD",
    "date": "2023-01-10T10:00:00-05:00",
    "impact": "Low",
    "forecast": "1.0%",
    "previous": "1.0%"
    },
    {
    "title": "IBD/TIPP Economic Optimism",
    "country": "USD",
    "date": "2023-01-10T10:00:00-05:00",
    "impact": "Low",
    "forecast": "41.7",
    "previous": "42.9"
    },
    {
    "title": "ANZ Commodity Prices m/m",
    "country": "NZD",
    "date": "2023-01-10T19:00:00-05:00",
    "impact": "Low",
    "forecast": "",
    "previous": "-3.9%"
    },
    {
    "title": "Retail Sales m/m",
    "country": "AUD",
    "date": "2023-01-10T19:30:00-05:00",
    "impact": "Low",
    "forecast": "0.6%",
    "previous": "-0.2%"
    },
    {
    "title": "CPI y/y",
    "country": "AUD",
    "date": "2023-01-10T19:30:00-05:00",
    "impact": "High",
    "forecast": "7.2%",
    "previous": "6.9%"
    },
    {
    "title": "30-y Bond Auction",
    "country": "JPY",
    "date": "2023-01-10T22:35:00-05:00",
    "impact": "Low",
    "forecast": "",
    "previous": "1.48|3.0"
    },
    {
    "title": "Leading Indicators",
    "country": "JPY",
    "date": "2023-01-11T00:00:00-05:00",
    "impact": "Low",
    "forecast": "97.5%",
    "previous": "99.0%"
    },
    {
    "title": "Italian Retail Sales m/m",
    "country": "EUR",
    "date": "2023-01-11T03:57:00-05:00",
    "impact": "Low",
    "forecast": "-0.3%",
    "previous": "-0.4%"
    },
    {
    "title": "German 10-y Bond Auction",
    "country": "EUR",
    "date": "2023-01-11T05:33:00-05:00",
    "impact": "Low",
    "forecast": "",
    "previous": "1.95|2.0"
    },
    {
    "title": "Crude Oil Inventories",
    "country": "USD",
    "date": "2023-01-11T10:30:00-05:00",
    "impact": "Low",
    "forecast": "-2.0M",
    "previous": "1.7M"
    },
    {
    "title": "10-y Bond Auction",
    "country": "USD",
    "date": "2023-01-11T13:01:00-05:00",
    "impact": "Medium",
    "forecast": "",
    "previous": "3.63|2.3"
    },
    {
    "title": "Building Consents m/m",
    "country": "NZD",
    "date": "2023-01-11T16:45:00-05:00",
    "impact": "Low",
    "forecast": "",
    "previous": "-10.7%"
    },
    {
    "title": "Bank Lending y/y",
    "country": "JPY",
    "date": "2023-01-11T18:50:00-05:00",
    "impact": "Low",
    "forecast": "2.8%",
    "previous": "2.7%"
    },
    {
    "title": "Current Account",
    "country": "JPY",
    "date": "2023-01-11T18:50:00-05:00",
    "impact": "Low",
    "forecast": "0.65T",
    "previous": "-0.61T"
    },
    {
    "title": "Trade Balance",
    "country": "AUD",
    "date": "2023-01-11T19:30:00-05:00",
    "impact": "Low",
    "forecast": "11.35B",
    "previous": "12.22B"
    },
    {
    "title": "CPI y/y",
    "country": "CNY",
    "date": "2023-01-11T20:30:00-05:00",
    "impact": "Low",
    "forecast": "1.8%",
    "previous": "1.6%"
    },
    {
    "title": "PPI y/y",
    "country": "CNY",
    "date": "2023-01-11T20:30:00-05:00",
    "impact": "Low",
    "forecast": "-0.1%",
    "previous": "-1.3%"
    },
    {
    "title": "Economy Watchers Sentiment",
    "country": "JPY",
    "date": "2023-01-12T00:00:00-05:00",
    "impact": "Low",
    "forecast": "47.8",
    "previous": "48.1"
    },
    {
    "title": "ECB Economic Bulletin",
    "country": "EUR",
    "date": "2023-01-12T04:00:00-05:00",
    "impact": "Low",
    "forecast": "",
    "previous": ""
    },
    {
    "title": "Housing Equity Withdrawal q/q",
    "country": "GBP",
    "date": "2023-01-12T04:36:00-05:00",
    "impact": "Low",
    "forecast": "-7.9B",
    "previous": "-5.1B"
    },
    {
    "title": "FOMC Member Harker Speaks",
    "country": "USD",
    "date": "2023-01-12T07:30:00-05:00",
    "impact": "Low",
    "forecast": "",
    "previous": ""
    },
    {
    "title": "CPI m/m",
    "country": "USD",
    "date": "2023-01-12T08:30:00-05:00",
    "impact": "High",
    "forecast": "-0.1%",
    "previous": "0.1%"
    },
    {
    "title": "Core CPI m/m",
    "country": "USD",
    "date": "2023-01-12T08:30:00-05:00",
    "impact": "High",
    "forecast": "0.3%",
    "previous": "0.2%"
    },
    {
    "title": "CPI y/y",
    "country": "USD",
    "date": "2023-01-12T08:30:00-05:00",
    "impact": "High",
    "forecast": "6.5%",
    "previous": "7.1%"
    },
    {
    "title": "Unemployment Claims",
    "country": "USD",
    "date": "2023-01-12T08:30:00-05:00",
    "impact": "Medium",
    "forecast": "216K",
    "previous": "204K"
    },
    {
    "title": "Natural Gas Storage",
    "country": "USD",
    "date": "2023-01-12T10:30:00-05:00",
    "impact": "Low",
    "forecast": "",
    "previous": "-221B"
    },
    {
    "title": "MPC Member Mann Speaks",
    "country": "GBP",
    "date": "2023-01-12T12:00:00-05:00",
    "impact": "Low",
    "forecast": "",
    "previous": ""
    },
    {
    "title": "30-y Bond Auction",
    "country": "USD",
    "date": "2023-01-12T13:01:00-05:00",
    "impact": "Low",
    "forecast": "",
    "previous": "3.51|2.2"
    },
    {
    "title": "Federal Budget Balance",
    "country": "USD",
    "date": "2023-01-12T14:00:00-05:00",
    "impact": "Low",
    "forecast": "-59.5B",
    "previous": "-248.5B"
    },
    {
    "title": "M2 Money Stock y/y",
    "country": "JPY",
    "date": "2023-01-12T18:50:00-05:00",
    "impact": "Low",
    "forecast": "3.2%",
    "previous": "3.1%"
    },
    {
    "title": "Trade Balance",
    "country": "CNY",
    "date": "2023-01-12T22:03:00-05:00",
    "impact": "Low",
    "forecast": "533B",
    "previous": "494B"
    },
    {
    "title": "USD-Denominated Trade Balance",
    "country": "CNY",
    "date": "2023-01-12T22:04:00-05:00",
    "impact": "Low",
    "forecast": "77.9B",
    "previous": "69.8B"
    },
    {
    "title": "GDP m/m",
    "country": "GBP",
    "date": "2023-01-13T02:00:00-05:00",
    "impact": "High",
    "forecast": "-0.2%",
    "previous": "0.5%"
    },
    {
    "title": "Goods Trade Balance",
    "country": "GBP",
    "date": "2023-01-13T02:00:00-05:00",
    "impact": "Low",
    "forecast": "-14.9B",
    "previous": "-14.5B"
    },
    {
    "title": "Construction Output m/m",
    "country": "GBP",
    "date": "2023-01-13T02:00:00-05:00",
    "impact": "Low",
    "forecast": "-0.3%",
    "previous": "0.8%"
    },
    {
    "title": "Industrial Production m/m",
    "country": "GBP",
    "date": "2023-01-13T02:00:00-05:00",
    "impact": "Low",
    "forecast": "-0.2%",
    "previous": "0.0%"
    },
    {
    "title": "Manufacturing Production m/m",
    "country": "GBP",
    "date": "2023-01-13T02:00:00-05:00",
    "impact": "Low",
    "forecast": "-0.2%",
    "previous": "0.7%"
    },
    {
    "title": "Index of Services 3m/3m",
    "country": "GBP",
    "date": "2023-01-13T02:00:00-05:00",
    "impact": "Low",
    "forecast": "-0.3%",
    "previous": "-0.1%"
    },
    {
    "title": "French Final CPI m/m",
    "country": "EUR",
    "date": "2023-01-13T02:45:00-05:00",
    "impact": "Low",
    "forecast": "-0.1%",
    "previous": "-0.1%"
    },
    {
    "title": "Italian Industrial Production m/m",
    "country": "EUR",
    "date": "2023-01-13T04:00:00-05:00",
    "impact": "Low",
    "forecast": "0.4%",
    "previous": "-1.0%"
    },
    {
    "title": "Industrial Production m/m",
    "country": "EUR",
    "date": "2023-01-13T05:00:00-05:00",
    "impact": "Low",
    "forecast": "0.6%",
    "previous": "-2.0%"
    },
    {
    "title": "Trade Balance",
    "country": "EUR",
    "date": "2023-01-13T05:00:00-05:00",
    "impact": "Low",
    "forecast": "-21.1B",
    "previous": "-28.3B"
    },
    {
    "title": "NIESR GDP Estimate",
    "country": "GBP",
    "date": "2023-01-13T08:03:00-05:00",
    "impact": "Low",
    "forecast": "",
    "previous": "-0.3%"
    },
    {
    "title": "Import Prices m/m",
    "country": "USD",
    "date": "2023-01-13T08:30:00-05:00",
    "impact": "Low",
    "forecast": "-0.9%",
    "previous": "-0.6%"
    },
    {
    "title": "Prelim UoM Consumer Sentiment",
    "country": "USD",
    "date": "2023-01-13T10:00:00-05:00",
    "impact": "High",
    "forecast": "60.8",
    "previous": "59.1"
    },
    {
    "title": "Prelim UoM Inflation Expectations",
    "country": "USD",
    "date": "2023-01-13T10:00:00-05:00",
    "impact": "Medium",
    "forecast": "",
    "previous": "4.6%"
    }
    ];




// filter the data array and return only values that match USD and are high impact
const filteredData = newsData.filter((item) => item.country === 'USD' && item.impact === 'High');

console.log(filteredData);


// split the date string into date and time and insert time as a new property
filteredData.forEach((item) => {
    const date = item.date.split('T');
    item.date = date[0];
    item.time = date[1];
});

console.log(filteredData);

// convert the time string into local time
filteredData.forEach((item) => {
    const time = item.time.split(':');
    const hours = parseInt(time[0]);
    const minutes = parseInt(time[1]);
    const seconds = parseInt(time[2]);
    const date = new Date(2023, 0, 13, hours, minutes, seconds);
    item.time = date.toLocaleTimeString();
});

console.log(filteredData);


const calendarDiv = document.getElementById('calendarData');

//insert all data of filteredData object into the calendarDiv
filteredData.forEach((item) => {
    const div = document.createElement('div');
    div.className = 'calendarItem';
    div.innerHTML = `<br><br><p>${item.title}</p><p>${item.date}</p><p>${item.time}</p><br><hr><br>`;

    calendarDiv.appendChild(div);
});