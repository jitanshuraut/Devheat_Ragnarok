import React, { useEffect, useState } from 'react'
import styles from "../style/home__module.css"
import { Link, useNavigate } from 'react-router-dom';

function Home__() {
  const navigate = useNavigate();
  const [coin, setcoin] = useState([])
  useEffect(() => {





    async function fetchMoviesJSON() {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '9be73ef885mshba4ffce1e2b9442p1a2d69jsndd40b3e2500c',
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
      };
      const response = await fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
      const movies = await response.json();
      return movies;
    }
    fetchMoviesJSON().then(movies => {

      setcoin(movies)

      // console.log(movies) // fetched movies

    });



  }, [])




  const data = [

    {
      "uuid": "Qwsogvtv82FCd",
      "symbol": "BTC",
      "name": "Bitcoin",
      "color": "#f7931A",
      "iconUrl": "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
      "marketCap": "320520355565",
      "price": "16684.35663014468",
      "listedAt": 1330214400,
      "tier": 1,
      "change": "112.58",
      "rank": 1,
      "sparkline": [
        "12525.272272529875",
        "8544.389179305728",
        "6877.196870556769",
        "6208.877211929487",
        "3692.465783985986",
        "5431.735880930977",
        "10161.803919446436",
        "8859.762539674723",
        "8427.94792654263",
        "7049.6276508148",
        "9382.463421264727",
        "10599.164275991241",
        "11247.35874883556",
        "19151.568083797898",
        "40385.55169020499",
        "56142.31324326891",
        "41696.06218893489",
        "39754.49330524168",
        "51859.14581597393",
        "55082.0399503876",
        "40927.249616939",
        "41788.043892174006",
        "28201.318750918443",
        "21959.496350328613",
        "19726.17374448676"
      ],
      "lowVolume": false,
      "coinrankingUrl": "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
      "24hVolume": "20691212017",
      "btcPrice": "1"
    },
    {
      "uuid": "razxDUgYGNAdQ",
      "symbol": "ETH",
      "name": "Ethereum",
      "color": "#3C3C3D",
      "iconUrl": "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
      "marketCap": "147621359263",
      "price": "1209.9076107145793",
      "listedAt": 1438905600,
      "tier": 1,
      "change": "265.38",
      "rank": 2,
      "sparkline": [
        "857.6440235372082",
        "612.4296234892616",
        "438.89768313373577",
        "204.52091051308125",
        "120.91773427057804",
        "173.2230706466804",
        "239.96890473534788",
        "179.48384401151708",
        "177.15336764323325",
        "166.3311364048368",
        "222.32425704064056",
        "328.53201845133975",
        "372.6264857141429",
        "550.5962946341951",
        "1435.9075439049066",
        "2008.9693290443904",
        "2762.46440781244",
        "2594.8549986575854",
        "3572.9450572499295",
        "4242.782631567077",
        "2967.1010671864883",
        "2993.5599095372054",
        "1799.8594319119927",
        "1524.9434697938839",
        "1426.568992193752"
      ],
      "lowVolume": false,
      "coinrankingUrl": "https://coinranking.com/coin/razxDUgYGNAdQ+ethereum-eth",
      "24hVolume": "7688975368",
      "btcPrice": "0.07251748674135643"
    },
    {
      "uuid": "HIVsRcGKkPFtW",
      "symbol": "USDT",
      "name": "Tether USD",
      "color": "#22a079",
      "iconUrl": "https://cdn.coinranking.com/mgHqwlCLj/usdt.svg",
      "marketCap": "65963136309",
      "price": "1.0002797865032835",
      "listedAt": 1420761600,
      "tier": 1,
      "change": "-0.24",
      "rank": 3,
      "sparkline": [
        "1.007338655205943",
        "1.0001786113602409",
        "1.0011195871875882",
        "0.9932450083808547",
        "1.0056778187426756",
        "1.0027224817825293",
        "0.9968557524013884",
        "1.0052475784815238",
        "1.0027345546134119",
        "1.0004318039735196",
        "1.0046619138353743",
        "1.0026790068137852",
        "1.0013956878040993",
        "1.0006690471328896",
        "1.0016939307385453",
        "1.00428515607773",
        "1.003151794384176",
        "1.0006908378676391",
        "1.0008952657704733",
        "1.005024775673304",
        "1.0017001800918062",
        "1.0017428773785861",
        "1.0030999946451602",
        "1.0008686210597382",
        "1.0003549845802517"
      ],
      "lowVolume": false,
      "coinrankingUrl": "https://coinranking.com/coin/HIVsRcGKkPFtW+tetherusd-usdt",
      "24hVolume": "23026636164",
      "btcPrice": "0.000059953153044932"
    },
    {
      "uuid": "aKzUVe4Hh_CON",
      "symbol": "USDC",
      "name": "USDC",
      "color": "#7894b4",
      "iconUrl": "https://cdn.coinranking.com/jkDf8sQbY/usdc.svg",
      "marketCap": "44083504207",
      "price": "1.0010842955422978",
      "listedAt": 1539043200,
      "tier": 1,
      "change": null,
      "rank": 4,
      "sparkline": [
        "1.011367150741122",
        "1.004930161253619",
        "1.0170212115070103",
        "0.9972271684458479",
        "0.9948997411138139",
        "0.9985930398136201",
        "1.005901639100101",
        "1.0054147282062824",
        "1.0004556595828185",
        "1.010925218823063",
        "1.021816860586019",
        "1.0392287108609721",
        "1.0012173729908675",
        "1.0004354034928837",
        "1.0018028187856736",
        "1.0055582489662387",
        "1.000129819868256",
        "0.999886400677623",
        "0.9999255364304379",
        "1.0010620288803203",
        "1.0010094084067729",
        "1.00437637715551",
        "1.002959489107663",
        "1.0002150900918714",
        "1.0003581417782612"
      ],
      "lowVolume": false,
      "coinrankingUrl": "https://coinranking.com/coin/aKzUVe4Hh_CON+usdc-usdc",
      "24hVolume": "2009151039",
      "btcPrice": "0.000060001372407347"
    },
    {
      "uuid": "WcwrkfNI4FUAe",
      "symbol": "BNB",
      "name": "BNB",
      "color": "#e8b342",
      "iconUrl": "https://cdn.coinranking.com/B1N19L_dZ/bnb.svg",
      "marketCap": "38773555738",
      "price": "271.4941181301005",
      "listedAt": 1503014400,
      "tier": 1,
      "change": "17594.54",
      "rank": 5,
      "sparkline": [
        "9.56044362049317",
        "12.040951224018833",
        "13.298894829493987",
        "9.28173746906008",
        "6.872577724456333",
        "20.653595455295587",
        "30.301024288740233",
        "18.90031833899721",
        "17.448439366532845",
        "14.679278635509723",
        "16.65458147627495",
        "20.099822542053516",
        "27.414956208413614",
        "30.060003865855364",
        "97.8548225108118",
        "373.1059714237476",
        "424.82244312375246",
        "358.6764853182024",
        "435.4935880774092",
        "577.2776481719927",
        "419.44285115478914",
        "407.5327344005692",
        "289.09566234225076",
        "275.61603861402983",
        "279.81387943069655"
      ],
      "lowVolume": false,
      "coinrankingUrl": "https://coinranking.com/coin/WcwrkfNI4FUAe+bnb-bnb",
      "24hVolume": "630027766",
      "btcPrice": "0.016272375623976713"
    },
    {
      "uuid": "vSo2fu9iE1s0Y",
      "symbol": "BUSD",
      "name": "Binance USD",
      "color": "#f0b90b",
      "iconUrl": "https://cdn.coinranking.com/6SJHRfClq/busd.svg",
      "marketCap": "22929835554",
      "price": "1.001282605150477",
      "listedAt": 1563197940,
      "tier": 1,
      "change": null,
      "rank": 6,
      "sparkline": [
        "0.702704660822367",
        "1.0022017572431101",
        "1.0082076750904951",
        "1.0012031388149616",
        "0.999413325019169",
        "1.0040108856758836",
        "1.0014519445437464",
        "1.0005578480164221",
        "0.9995410443773924",
        "1.0006803648744578",
        "1.004042481891396",
        "1.0019646994354257",
        "0.9998539127024421",
        "0.9998810645615256",
        "1.0011526847898677",
        "1.0011795939828134",
        "1.0010469270277798",
        "1.000963721557761",
        "1.003644136484228",
        "1.0070221545260896",
        "1.0055819561747281",
        "1.0010585975257618",
        "1.0001868628005983",
        "1.0003506806111013",
        "1.0003919577725602"
      ],
      "lowVolume": false,
      "coinrankingUrl": "https://coinranking.com/coin/vSo2fu9iE1s0Y+binanceusd-busd",
      "24hVolume": "6164398242",
      "btcPrice": "0.000060013258368105"
    }
  ]




  return (
    <>


      {sessionStorage.getItem("name") ? console.log("yes") : navigate("/login")}

      <div className="firstSection" id="first" style={{ backgroundImage: "url(background3.png)" }}>
        <div className="navBar">
          <div className="logo">
            <img src="Logo.png" className="logo2" alt="Logo" />
          </div>
          <div className="menus">
            <ul>
              <li>Stocks</li>
              <li>Predictor</li>
              <li>Profile</li>
              <li>About us</li>
            </ul>
          </div>
          <div className="Sign up" onClick={() => {
            navigate("/extra")
          }}><i className="fa fa-user-circle" style={{ fontSize: '36px' }} />
          </div>
        </div>
        <div className="section">
          <div className="firstLeft">
            <div className="line">
              <div className="head1">Trading Platform</div>
            </div>
            <div className="text">Always an informed investment decision. <br />
              First you prepare, then you go for it.</div>
            <div className="btn" id="btn2"><button className="button-43" role="button">Predictor</button></div>
          </div>
          <div className="firstRight">
            {/* <img class="firstImage" src="poster.png" alt="image"> */}
            <img className="firstImage" src="poster.png" alt="image" />
          </div>
        </div>
      </div>
      <h1 className="head">Live Price</h1>

      <hr style={{ width: "95%", margin: "auto" }} />

      <div className="list_box">

        <div className="data_box">
          <div className="left_side">

            <h2 className="short_name">Symbol</h2>

          </div>
          <div className="right_side">
            <h2 className="change">Change</h2>
            <h2 className="price"> Price</h2>
          </div>
        </div>

        <hr />


        {
          data.map((ele) => {
            let p = Number(ele.price).toFixed(3)
            return (<div className="data_box" onClick={() => {
              navigate('/coin_detail', { state: { id: ele.id, url: ele.iconUrl, uuid: ele.uuid, name: ele.name, symbol: ele.symbol, price: ele.price, change: ele.change } });
            }}>
              <div className="left_side">
                <img src={ele.iconUrl} alt="" className="img_coin" />
                <h2 className="short_name">{ele.symbol}</h2>
                <h2 className="long_name">{ele.name}</h2>
              </div>
              <div className="right_side">
                <h2 className="change">{ele.change}</h2>
                <h2 className="price">{p} USDT</h2>
              </div>
            </div>)
          })
        }

      </div>
      <footer>
        <div className="foot" style={{ backgroundImage: "url(background5.png)" }}>
          <img src="Logo.png" alt="" />
          <div className="menus" id="nav2">
            <ul id="nav3">
              <li>Stocks</li>
              <li>Predictor</li>
              <li>Profile</li>
              <li>About us</li>
            </ul>
          </div>
          <div className="social">
            <i className="fa fa-linkedin-square" style={{ fontSize: '36px' }} />
            <i className="fa fa-github" style={{ fontSize: '36px' }} />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home__





