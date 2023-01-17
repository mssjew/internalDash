const timeDiv = document.getElementById("timeTicker");

// insert live time ticker to the timeTicker element

setInterval(() => {
    const date = new Date();
    const time = date.toLocaleTimeString();
    timeDiv.innerHTML = time;
}, 1000);


const newsData = [
  {
  "title": "PPI y/y",
  "country": "JPY",
  "date": "2023-01-15T18:50:00-05:00",
  "impact": "Low",
  "forecast": "9.5%",
  "previous": "9.3%"
  },
  {
  "title": "Rightmove HPI m/m",
  "country": "GBP",
  "date": "2023-01-15T19:01:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": "-2.1%"
  },
  {
  "title": "MI Inflation Gauge m/m",
  "country": "AUD",
  "date": "2023-01-15T19:02:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": "1.0%"
  },
  {
  "title": "Prelim Machine Tool Orders y/y",
  "country": "JPY",
  "date": "2023-01-16T01:00:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": "-7.8%"
  },
  {
  "title": "German WPI m/m",
  "country": "EUR",
  "date": "2023-01-16T02:00:00-05:00",
  "impact": "Low",
  "forecast": "-0.3%",
  "previous": "-0.9%"
  },
  {
  "title": "WEF Annual Meetings",
  "country": "ALL",
  "date": "2023-01-16T04:15:00-05:00",
  "impact": "Medium",
  "forecast": "",
  "previous": ""
  },
  {
  "title": "French Gov Budget Balance",
  "country": "EUR",
  "date": "2023-01-16T05:05:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": "-143.2B"
  },
  {
  "title": "Eurogroup Meetings",
  "country": "EUR",
  "date": "2023-01-16T05:15:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": ""
  },
  {
  "title": "Bank Holiday",
  "country": "USD",
  "date": "2023-01-16T08:00:00-05:00",
  "impact": "Holiday",
  "forecast": "",
  "previous": ""
  },
  {
  "title": "Manufacturing Sales m/m",
  "country": "CAD",
  "date": "2023-01-16T08:30:00-05:00",
  "impact": "Low",
  "forecast": "0.4%",
  "previous": "2.8%"
  },
  {
  "title": "BOE Gov Bailey Speaks",
  "country": "GBP",
  "date": "2023-01-16T10:00:00-05:00",
  "impact": "High",
  "forecast": "",
  "previous": ""
  },
  {
  "title": "BOC Business Outlook Survey",
  "country": "CAD",
  "date": "2023-01-16T10:30:00-05:00",
  "impact": "Medium",
  "forecast": "",
  "previous": ""
  },
  {
  "title": "NZIER Business Confidence",
  "country": "NZD",
  "date": "2023-01-16T16:00:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": "-42"
  },
  {
  "title": "Westpac Consumer Sentiment",
  "country": "AUD",
  "date": "2023-01-16T18:20:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": "3.0%"
  },
  {
  "title": "GDP q/y",
  "country": "CNY",
  "date": "2023-01-16T21:00:00-05:00",
  "impact": "High",
  "forecast": "1.6%",
  "previous": "3.9%"
  },
  {
  "title": "Fixed Asset Investment ytd/y",
  "country": "CNY",
  "date": "2023-01-16T21:00:00-05:00",
  "impact": "Low",
  "forecast": "5.0%",
  "previous": "5.3%"
  },
  {
  "title": "Industrial Production y/y",
  "country": "CNY",
  "date": "2023-01-16T21:00:00-05:00",
  "impact": "Low",
  "forecast": "0.2%",
  "previous": "2.2%"
  },
  {
  "title": "Retail Sales y/y",
  "country": "CNY",
  "date": "2023-01-16T21:00:00-05:00",
  "impact": "Low",
  "forecast": "-9.5%",
  "previous": "-5.9%"
  },
  {
  "title": "Unemployment Rate",
  "country": "CNY",
  "date": "2023-01-16T21:00:00-05:00",
  "impact": "Low",
  "forecast": "5.8%",
  "previous": "5.7%"
  },
  {
  "title": "NBS Press Conference",
  "country": "CNY",
  "date": "2023-01-16T21:00:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": ""
  },
  {
  "title": "Tertiary Industry Activity m/m",
  "country": "JPY",
  "date": "2023-01-16T23:30:00-05:00",
  "impact": "Low",
  "forecast": "0.2%",
  "previous": "0.2%"
  },
  {
  "title": "German Final CPI m/m",
  "country": "EUR",
  "date": "2023-01-17T02:00:00-05:00",
  "impact": "Low",
  "forecast": "-0.8%",
  "previous": "-0.8%"
  },
  {
  "title": "Average Earnings Index 3m/y",
  "country": "GBP",
  "date": "2023-01-17T02:00:00-05:00",
  "impact": "Medium",
  "forecast": "6.2%",
  "previous": "6.1%"
  },
  {
  "title": "Claimant Count Change",
  "country": "GBP",
  "date": "2023-01-17T02:00:00-05:00",
  "impact": "High",
  "forecast": "19.8K",
  "previous": "30.5K"
  },
  {
  "title": "Unemployment Rate",
  "country": "GBP",
  "date": "2023-01-17T02:00:00-05:00",
  "impact": "Low",
  "forecast": "3.7%",
  "previous": "3.7%"
  },
  {
  "title": "WEF Annual Meetings",
  "country": "ALL",
  "date": "2023-01-17T04:15:00-05:00",
  "impact": "Medium",
  "forecast": "",
  "previous": ""
  },
  {
  "title": "Housing Equity Withdrawal q/q",
  "country": "GBP",
  "date": "2023-01-17T04:36:00-05:00",
  "impact": "Low",
  "forecast": "-7.9B",
  "previous": "-5.1B"
  },
  {
  "title": "ZEW Economic Sentiment",
  "country": "EUR",
  "date": "2023-01-17T05:00:00-05:00",
  "impact": "Low",
  "forecast": "-14.3",
  "previous": "-23.6"
  },
  {
  "title": "German ZEW Economic Sentiment",
  "country": "EUR",
  "date": "2023-01-17T05:00:00-05:00",
  "impact": "Medium",
  "forecast": "-15.0",
  "previous": "-23.3"
  },
  {
  "title": "ECOFIN Meetings",
  "country": "EUR",
  "date": "2023-01-17T05:15:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": ""
  },
  {
  "title": "Housing Starts",
  "country": "CAD",
  "date": "2023-01-17T08:15:00-05:00",
  "impact": "Low",
  "forecast": "257K",
  "previous": "264K"
  },
  {
  "title": "Empire State Manufacturing Index",
  "country": "USD",
  "date": "2023-01-17T08:30:00-05:00",
  "impact": "High",
  "forecast": "-8.7",
  "previous": "-11.2"
  },
  {
  "title": "CPI m/m",
  "country": "CAD",
  "date": "2023-01-17T08:30:00-05:00",
  "impact": "High",
  "forecast": "-0.6%",
  "previous": "0.1%"
  },
  {
  "title": "Core CPI m/m",
  "country": "CAD",
  "date": "2023-01-17T08:30:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": "0.0%"
  },
  {
  "title": "Common CPI y/y",
  "country": "CAD",
  "date": "2023-01-17T08:30:00-05:00",
  "impact": "Medium",
  "forecast": "6.6%",
  "previous": "6.7%"
  },
  {
  "title": "Trimmed CPI y/y",
  "country": "CAD",
  "date": "2023-01-17T08:30:00-05:00",
  "impact": "High",
  "forecast": "5.2%",
  "previous": "5.3%"
  },
  {
  "title": "Median CPI y/y",
  "country": "CAD",
  "date": "2023-01-17T08:30:00-05:00",
  "impact": "High",
  "forecast": "4.9%",
  "previous": "5.0%"
  },
  {
  "title": "Foreign Securities Purchases",
  "country": "CAD",
  "date": "2023-01-17T08:30:00-05:00",
  "impact": "Low",
  "forecast": "2.73B",
  "previous": "8.46B"
  },
  {
  "title": "GDT Price Index",
  "country": "NZD",
  "date": "2023-01-17T10:33:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": "-2.8%"
  },
  {
  "title": "FOMC Member Williams Speaks",
  "country": "USD",
  "date": "2023-01-17T15:00:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": ""
  },
  {
  "title": "Core Machinery Orders m/m",
  "country": "JPY",
  "date": "2023-01-17T18:50:00-05:00",
  "impact": "Low",
  "forecast": "-1.3%",
  "previous": "5.4%"
  },
  {
  "title": "BOJ Policy Rate",
  "country": "JPY",
  "date": "2023-01-17T22:30:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": "-0.10%"
  },
  {
  "title": "Monetary Policy Statement",
  "country": "JPY",
  "date": "2023-01-17T22:30:00-05:00",
  "impact": "High",
  "forecast": "",
  "previous": ""
  },
  {
  "title": "BOJ Outlook Report",
  "country": "JPY",
  "date": "2023-01-17T22:30:00-05:00",
  "impact": "High",
  "forecast": "",
  "previous": ""
  },
  {
  "title": "Revised Industrial Production m/m",
  "country": "JPY",
  "date": "2023-01-17T23:30:00-05:00",
  "impact": "Low",
  "forecast": "-0.1%",
  "previous": "-0.1%"
  },
  {
  "title": "BOJ Press Conference",
  "country": "JPY",
  "date": "2023-01-18T01:30:00-05:00",
  "impact": "High",
  "forecast": "",
  "previous": ""
  },
  {
  "title": "Core CPI y/y",
  "country": "GBP",
  "date": "2023-01-18T02:00:00-05:00",
  "impact": "Low",
  "forecast": "6.2%",
  "previous": "6.3%"
  },
  {
  "title": "CPI y/y",
  "country": "GBP",
  "date": "2023-01-18T02:00:00-05:00",
  "impact": "High",
  "forecast": "10.5%",
  "previous": "10.7%"
  },
  {
  "title": "RPI y/y",
  "country": "GBP",
  "date": "2023-01-18T02:00:00-05:00",
  "impact": "Low",
  "forecast": "13.7%",
  "previous": "14.0%"
  },
  {
  "title": "Foreign Direct Investment ytd/y",
  "country": "CNY",
  "date": "2023-01-18T02:02:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": "9.9%"
  },
  {
  "title": "Italian Trade Balance",
  "country": "EUR",
  "date": "2023-01-18T04:00:00-05:00",
  "impact": "Low",
  "forecast": "-1.80B",
  "previous": "-2.12B"
  },
  {
  "title": "WEF Annual Meetings",
  "country": "ALL",
  "date": "2023-01-18T04:15:00-05:00",
  "impact": "Medium",
  "forecast": "",
  "previous": ""
  },
  {
  "title": "HPI y/y",
  "country": "GBP",
  "date": "2023-01-18T04:30:00-05:00",
  "impact": "Low",
  "forecast": "10.5%",
  "previous": "12.6%"
  },
  {
  "title": "Final Core CPI y/y",
  "country": "EUR",
  "date": "2023-01-18T05:00:00-05:00",
  "impact": "Low",
  "forecast": "5.2%",
  "previous": "5.2%"
  },
  {
  "title": "Final CPI y/y",
  "country": "EUR",
  "date": "2023-01-18T05:00:00-05:00",
  "impact": "Low",
  "forecast": "9.2%",
  "previous": "9.2%"
  },
  {
  "title": "German 30-y Bond Auction",
  "country": "EUR",
  "date": "2023-01-18T05:34:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": "1.94|1.8"
  },
  {
  "title": "PPI m/m",
  "country": "USD",
  "date": "2023-01-18T08:30:00-05:00",
  "impact": "High",
  "forecast": "-0.1%",
  "previous": "0.3%"
  },
  {
  "title": "Core PPI m/m",
  "country": "USD",
  "date": "2023-01-18T08:30:00-05:00",
  "impact": "High",
  "forecast": "0.1%",
  "previous": "0.4%"
  },
  {
  "title": "Core Retail Sales m/m",
  "country": "USD",
  "date": "2023-01-18T08:30:00-05:00",
  "impact": "High",
  "forecast": "-0.5%",
  "previous": "-0.2%"
  },
  {
  "title": "Retail Sales m/m",
  "country": "USD",
  "date": "2023-01-18T08:30:00-05:00",
  "impact": "High",
  "forecast": "-0.8%",
  "previous": "-0.6%"
  },
  {
  "title": "RMPI m/m",
  "country": "CAD",
  "date": "2023-01-18T08:30:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": "-0.8%"
  },
  {
  "title": "IPPI m/m",
  "country": "CAD",
  "date": "2023-01-18T08:30:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": "-0.4%"
  },
  {
  "title": "Industrial Production m/m",
  "country": "USD",
  "date": "2023-01-18T09:15:00-05:00",
  "impact": "Low",
  "forecast": "-0.1%",
  "previous": "-0.2%"
  },
  {
  "title": "Capacity Utilization Rate",
  "country": "USD",
  "date": "2023-01-18T09:15:00-05:00",
  "impact": "Low",
  "forecast": "79.6%",
  "previous": "79.7%"
  },
  {
  "title": "CB Leading Index m/m",
  "country": "GBP",
  "date": "2023-01-18T09:30:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": "-0.8%"
  },
  {
  "title": "Business Inventories m/m",
  "country": "USD",
  "date": "2023-01-18T10:00:00-05:00",
  "impact": "Low",
  "forecast": "0.4%",
  "previous": "0.3%"
  },
  {
  "title": "NAHB Housing Market Index",
  "country": "USD",
  "date": "2023-01-18T10:00:00-05:00",
  "impact": "Low",
  "forecast": "31",
  "previous": "31"
  },
  {
  "title": "Beige Book",
  "country": "USD",
  "date": "2023-01-18T14:00:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": ""
  },
  {
  "title": "FOMC Member Harker Speaks",
  "country": "USD",
  "date": "2023-01-18T14:00:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": ""
  },
  {
  "title": "TIC Long-Term Purchases",
  "country": "USD",
  "date": "2023-01-18T16:00:00-05:00",
  "impact": "Low",
  "forecast": "127.9B",
  "previous": "67.8B"
  },
  {
  "title": "FPI m/m",
  "country": "NZD",
  "date": "2023-01-18T16:45:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": "0.0%"
  },
  {
  "title": "FOMC Member Logan Speaks",
  "country": "USD",
  "date": "2023-01-18T17:00:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": ""
  },
  {
  "title": "Trade Balance",
  "country": "JPY",
  "date": "2023-01-18T18:50:00-05:00",
  "impact": "Low",
  "forecast": "-1.63T",
  "previous": "-1.73T"
  },
  {
  "title": "MI Inflation Expectations",
  "country": "AUD",
  "date": "2023-01-18T19:00:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": "5.2%"
  },
  {
  "title": "RICS House Price Balance",
  "country": "GBP",
  "date": "2023-01-18T19:01:00-05:00",
  "impact": "Low",
  "forecast": "-30%",
  "previous": "-25%"
  },
  {
  "title": "Employment Change",
  "country": "AUD",
  "date": "2023-01-18T19:30:00-05:00",
  "impact": "Medium",
  "forecast": "21.2K",
  "previous": "64.0K"
  },
  {
  "title": "Unemployment Rate",
  "country": "AUD",
  "date": "2023-01-18T19:30:00-05:00",
  "impact": "Medium",
  "forecast": "3.4%",
  "previous": "3.4%"
  },
  {
  "title": "PPI m/m",
  "country": "CHF",
  "date": "2023-01-19T02:30:00-05:00",
  "impact": "Low",
  "forecast": "-0.4%",
  "previous": "-0.5%"
  },
  {
  "title": "Current Account",
  "country": "EUR",
  "date": "2023-01-19T04:00:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": "-0.4B"
  },
  {
  "title": "WEF Annual Meetings",
  "country": "ALL",
  "date": "2023-01-19T04:15:00-05:00",
  "impact": "Medium",
  "forecast": "",
  "previous": ""
  },
  {
  "title": "BOE Credit Conditions Survey",
  "country": "GBP",
  "date": "2023-01-19T04:30:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": ""
  },
  {
  "title": "ECB President Lagarde Speaks",
  "country": "EUR",
  "date": "2023-01-19T05:30:00-05:00",
  "impact": "Medium",
  "forecast": "",
  "previous": ""
  },
  {
  "title": "ECB Monetary Policy Meeting Accounts",
  "country": "EUR",
  "date": "2023-01-19T07:30:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": ""
  },
  {
  "title": "Housing Starts",
  "country": "USD",
  "date": "2023-01-19T08:30:00-05:00",
  "impact": "Low",
  "forecast": "1.36M",
  "previous": "1.43M"
  },
  {
  "title": "Building Permits",
  "country": "USD",
  "date": "2023-01-19T08:30:00-05:00",
  "impact": "Low",
  "forecast": "1.37M",
  "previous": "1.34M"
  },
  {
  "title": "Philly Fed Manufacturing Index",
  "country": "USD",
  "date": "2023-01-19T08:30:00-05:00",
  "impact": "Medium",
  "forecast": "-11.2",
  "previous": "-13.8"
  },
  {
  "title": "Unemployment Claims",
  "country": "USD",
  "date": "2023-01-19T08:30:00-05:00",
  "impact": "Medium",
  "forecast": "212K",
  "previous": "205K"
  },
  {
  "title": "Wholesale Sales m/m",
  "country": "CAD",
  "date": "2023-01-19T08:30:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": "2.1%"
  },
  {
  "title": "Natural Gas Storage",
  "country": "USD",
  "date": "2023-01-19T10:30:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": "11B"
  },
  {
  "title": "CB Leading Index m/m",
  "country": "AUD",
  "date": "2023-01-19T10:30:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": "0.4%"
  },
  {
  "title": "Crude Oil Inventories",
  "country": "USD",
  "date": "2023-01-19T11:00:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": "19.0M"
  },
  {
  "title": "FOMC Member Brainard Speaks",
  "country": "USD",
  "date": "2023-01-19T13:15:00-05:00",
  "impact": "Medium",
  "forecast": "",
  "previous": ""
  },
  {
  "title": "BusinessNZ Manufacturing Index",
  "country": "NZD",
  "date": "2023-01-19T16:30:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": "47.4"
  },
  {
  "title": "Visitor Arrivals m/m",
  "country": "NZD",
  "date": "2023-01-19T16:45:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": "6.8%"
  },
  {
  "title": "National Core CPI y/y",
  "country": "JPY",
  "date": "2023-01-19T18:30:00-05:00",
  "impact": "Low",
  "forecast": "4.0%",
  "previous": "3.7%"
  },
  {
  "title": "FOMC Member Williams Speaks",
  "country": "USD",
  "date": "2023-01-19T18:35:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": ""
  },
  {
  "title": "GfK Consumer Confidence",
  "country": "GBP",
  "date": "2023-01-19T19:01:00-05:00",
  "impact": "Low",
  "forecast": "-41",
  "previous": "-42"
  },
  {
  "title": "German PPI m/m",
  "country": "EUR",
  "date": "2023-01-20T02:00:00-05:00",
  "impact": "Low",
  "forecast": "-1.2%",
  "previous": "-3.9%"
  },
  {
  "title": "Retail Sales m/m",
  "country": "GBP",
  "date": "2023-01-20T02:00:00-05:00",
  "impact": "Medium",
  "forecast": "0.5%",
  "previous": "-0.4%"
  },
  {
  "title": "SNB Chairman Jordan Speaks",
  "country": "CHF",
  "date": "2023-01-20T03:00:00-05:00",
  "impact": "Medium",
  "forecast": "",
  "previous": ""
  },
  {
  "title": "WEF Annual Meetings",
  "country": "ALL",
  "date": "2023-01-20T04:15:00-05:00",
  "impact": "Medium",
  "forecast": "",
  "previous": ""
  },
  {
  "title": "ECB President Lagarde Speaks",
  "country": "EUR",
  "date": "2023-01-20T05:00:00-05:00",
  "impact": "Medium",
  "forecast": "",
  "previous": ""
  },
  {
  "title": "Core Retail Sales m/m",
  "country": "CAD",
  "date": "2023-01-20T08:30:00-05:00",
  "impact": "Medium",
  "forecast": "-0.9%",
  "previous": "1.7%"
  },
  {
  "title": "Retail Sales m/m",
  "country": "CAD",
  "date": "2023-01-20T08:30:00-05:00",
  "impact": "Medium",
  "forecast": "-0.5%",
  "previous": "1.4%"
  },
  {
  "title": "FOMC Member Harker Speaks",
  "country": "USD",
  "date": "2023-01-20T09:00:00-05:00",
  "impact": "Low",
  "forecast": "",
  "previous": ""
  },
  {
  "title": "Existing Home Sales",
  "country": "USD",
  "date": "2023-01-20T10:00:00-05:00",
  "impact": "Medium",
  "forecast": "3.95M",
  "previous": "4.09M"
  },
  {
  "title": "FOMC Member Waller Speaks",
  "country": "USD",
  "date": "2023-01-20T13:00:00-05:00",
  "impact": "Medium",
  "forecast": "",
  "previous": ""
  }
  ]

// filter the data array and return only values that match USD and are high impact or medium impact
const filteredData = newsData.filter((item) => {
  return (
    item.country === "USD" &&
    (item.impact === "High" || item.impact === "Medium")
  );
});

console.log(filteredData);

// split the date string into date and time and insert time as a new property
filteredData.forEach((item) => {
  const date = item.date.split("T");
  item.date = date[0];
  item.time = date[1];
});

console.log(filteredData);

// convert the time string into local time
filteredData.forEach((item) => {
  const time = item.time.split(":");
  const hours = parseInt(time[0]);
  const minutes = parseInt(time[1]);
  const seconds = parseInt(time[2]);
  const date = new Date(2023, 0, 13, hours, minutes, seconds);
  item.time = date.toLocaleTimeString();
});

//convert date string to dd mm yyyy format
filteredData.forEach((item) => {
  const date = item.date.split("-");
  const year = date[0];
  const month = date[1];
  const day = date[2];
  item.date = `${day}/${month}/${year}`;
});

//get the day of the week from the date string and add it as a new property
filteredData.forEach((item) => {
  const date = item.date.split("/");
  const day = parseInt(date[0]);
  const month = parseInt(date[1] - 1);
  const year = parseInt(date[2]);
  const dateTime = new Date(year, month, day);
  const dayOfWeek = dateTime.toLocaleDateString("en-GB", { weekday: "long" });
  item.dayOfWeek = dayOfWeek;
});

// filteredData.forEach((item) => {
//     const date = item.date.split('/');
//     const day = parseInt(date[0]);
//     const month = parseInt(date[1]-1);
//     const year = parseInt(date[2]);
//     const time = item.time.split(':');
//     const hours = parseInt(time[0]);
//     const minutes = parseInt(time[1]);
//     const seconds = parseInt(time[2]);
//     const dateTime = new Date(year, month, day, hours, minutes, seconds);
//     const now = new Date();
//     console.log(dateTime);
//     if (dateTime < now) {
//         item.title = `${item.title}*`;
//     }
// });

// filteredData.forEach((item) => {
//     const date = item.date.split('/');
//     const day = parseInt(date[0]);
//     const month = parseInt(date[1]-1);
//     const year = parseInt(date[2]);
//     const time = item.time.split(':');
//     const hours = parseInt(time[0]);
//     const minutes = parseInt(time[1]);
//     const seconds = parseInt(time[2]);
//     const dateTime = new Date(year, month, day, hours, minutes, seconds);
//     const now = new Date();
//     if (dateTime < now) {
//         item.title = `<s>${item.title}</s>`;

//     }
// });

//add eight hours to time
filteredData.forEach((item) => {
  const time = item.time.split(":");
  const hours = parseInt(time[0]);
  const minutes = parseInt(time[1]);
  const seconds = parseInt(time[2]);
  const date = new Date(2023, 0, 13, hours, minutes, seconds);
  date.setHours(date.getHours() + 8);
  item.time = date.toLocaleTimeString();
});

// if a time and date is in the past then make the formatting strikethrough and light gray color text
filteredData.forEach((item) => {
  const date = item.date.split("/");
  const day = parseInt(date[0]);
  const month = parseInt(date[1] - 1);
  const year = parseInt(date[2]);
  const time = item.time.split(":");
  let hours = parseInt(time[0]);
  const minutes = parseInt(time[1]);
  const zone = time[2].split(" ")[1];
  if (zone === "PM") { hours += 12; };
  const dateTime = new Date(year, month, day, hours, minutes, 0);
  console.log(dateTime);
  const now = new Date();
  if (dateTime < now) {
    item.title = `<s style="color:gray">${item.title}</s>`;
    item.date = `<s style="color:gray">${item.date}</s>`;
    item.time = `<s style="color:gray">${item.time}</s>`;
  }
});

// separate data into arrays for each day of the week
const monday = filteredData.filter((item) => {
  return item.dayOfWeek === "Monday";
});
const tuesday = filteredData.filter((item) => {
  return item.dayOfWeek === "Tuesday";
});
const wednesday = filteredData.filter((item) => {
  return item.dayOfWeek === "Wednesday";
});
const thursday = filteredData.filter((item) => {
  return item.dayOfWeek === "Thursday";
});
const friday = filteredData.filter((item) => {
  return item.dayOfWeek === "Friday";
});

const calendarDiv = document.getElementById("calendarData");
const mondayData = document.getElementById("mondayData");
const tuesdayData = document.getElementById("tuesdayData");
const wednesdayData = document.getElementById("wednesdayData");
const thursdayData = document.getElementById("thursdayData");
const fridayData = document.getElementById("fridayData");

//insert all data of filteredData object into the calendarDiv
// filteredData.forEach((item) => {
//     const div = document.createElement('div');
//     div.className = 'calendarItem';
//     div.innerHTML = `<br><br><p>${item.title}</p><p>${item.date}</p><p>${item.time}</p><br><hr><br>`;

//     calendarDiv.appendChild(div);
// });

// <sl-badge variant="danger">Danger</sl-badge>
// <sl-badge variant="warning">Warning</sl-badge>

//insert all data of filteredData object into the calendarDiv and add a danger badge if high impact and warning badge if medium impact
// filteredData.forEach((item) => {
//     const div = document.createElement('div');
//     div.className = 'calendarItem';
//     if (item.impact === 'High') {
//         div.innerHTML = `<br><br><sl-badge variant="danger">High</sl-badge><p>${item.title}</p><p>${item.date}</p><p>${item.time}</p><br><hr>`;
//     } else if (item.impact === 'Medium') {
//         div.innerHTML = `<br><br><sl-badge variant="warning">Medium</sl-badge><p>${item.title}</p><p>${item.date}</p><p>${item.time}</p><br><hr>`;
//     }

//     calendarDiv.appendChild(div);
// });

//insert monday data into mondayData div and add a danger badge if high impact and warning badge if medium impact, if the array is empty enter a message saying no data
if (monday.length === 0) {
  const div = document.createElement("div");
  div.classList.add("calendarItem");
  div.innerHTML = `<br><br><p>No events.</p><br><hr>`;
  mondayData.appendChild(div);
} else {
  monday.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("calendarItem");
    if (item.impact === "High") {
      div.innerHTML = `<br><br><sl-badge variant="danger">High</sl-badge><p>${item.title}</p><p>${item.date}</p><p>${item.time}</p><br><hr>`;
    } else if (item.impact === "Medium") {
      div.innerHTML = `<br><br><sl-badge variant="warning">Medium</sl-badge><p>${item.title}</p><p>${item.date}</p><p>${item.time}</p><br><hr>`;
    }
    mondayData.appendChild(div);
  });
}

if (tuesday.length === 0) {
  const div = document.createElement("div");
  div.classList.add("calendarItem");
  div.innerHTML = `<br><br><p>No events.</p><br><hr>`;
  tuesdayData.appendChild(div);
} else {
  tuesday.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("calendarItem");
    if (item.impact === "High") {
      div.innerHTML = `<br><br><sl-badge variant="danger">High</sl-badge><p>${item.title}</p><p>${item.date}</p><p>${item.time}</p><br><hr>`;
    } else if (item.impact === "Medium") {
      div.innerHTML = `<br><br><sl-badge variant="warning">Medium</sl-badge><p>${item.title}</p><p>${item.date}</p><p>${item.time}</p><br><hr>`;
    }
    tuesdayData.appendChild(div);
  });
}

if (wednesday.length === 0) {
  const div = document.createElement("div");
  div.classList.add("calendarItem");
  div.innerHTML = `<br><br><p>No events.</p><br><hr>`;
  wednesdayData.appendChild(div);
} else {
  wednesday.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("calendarItem");
    if (item.impact === "High") {
      div.innerHTML = `<br><br><sl-badge variant="danger">High</sl-badge><p>${item.title}</p><p>${item.date}</p><p>${item.time}</p><br><hr>`;
    } else if (item.impact === "Medium") {
      div.innerHTML = `<br><br><sl-badge variant="warning">Medium</sl-badge><p>${item.title}</p><p>${item.date}</p><p>${item.time}</p><br><hr>`;
    }
    wednesdayData.appendChild(div);
  });
}

if (thursday.length === 0) {
  const div = document.createElement("div");
  div.classList.add("calendarItem");
  div.innerHTML = `<br><br><p>No events.</p><br><hr>`;
  thursdayData.appendChild(div);
} else {
  thursday.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("calendarItem");
    if (item.impact === "High") {
      div.innerHTML = `<br><br><sl-badge variant="danger">High</sl-badge><p>${item.title}</p><p>${item.date}</p><p>${item.time}</p><br><hr>`;
    } else if (item.impact === "Medium") {
      div.innerHTML = `<br><br><sl-badge variant="warning">Medium</sl-badge><p>${item.title}</p><p>${item.date}</p><p>${item.time}</p><br><hr>`;
    }
    thursdayData.appendChild(div);
  });
}

if (friday.length === 0) {
  const div = document.createElement("div");
  div.classList.add("calendarItem");
  div.innerHTML = `<br><br><p>No events.</p><br><hr>`;
  fridayData.appendChild(div);
} else {
  friday.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("calendarItem");
    if (item.impact === "High") {
      div.innerHTML = `<br><br><sl-badge variant="danger">High</sl-badge><p>${item.title}</p><p>${item.date}</p><p>${item.time}</p><br><hr>`;
    } else if (item.impact === "Medium") {
      div.innerHTML = `<br><br><sl-badge variant="warning">Medium</sl-badge><p>${item.title}</p><p>${item.date}</p><p>${item.time}</p><br><hr>`;
    }
    fridayData.appendChild(div);
  });
}
