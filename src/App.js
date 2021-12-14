import './App.css';
import {AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, Legend, ResponsiveContainer} from 'recharts';
import Button from 'react-bootstrap/Button';
import {Badge, Card, Col, Container, Nav, Navbar, NavDropdown, Row, Tab, Tabs} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { DataFrame } from 'pandas-js';
import React from "react";
let URL = "https://raw.githubusercontent.com/hodcroftlab/covariants/master/cluster_tables/USAClusters_data.json";

class App extends React.Component {

  data = [{
    "week": "2020-04-27",
    "Alpha": 0,
    "Beta": 0,
    "Gamma": 0,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 0,
    "Iota": 0,
    "Lambda": 0,
    "others": 0,
    "Delta": 0,
    "non_variants": 5693
  }, {
    "week": "2020-05-11",
    "Alpha": 0,
    "Beta": 0,
    "Gamma": 0,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 0,
    "Iota": 0,
    "Lambda": 0,
    "others": 0,
    "Delta": 0,
    "non_variants": 4711
  }, {
    "week": "2020-05-25",
    "Alpha": 0,
    "Beta": 0,
    "Gamma": 0,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 0,
    "Iota": 0,
    "Lambda": 0,
    "others": 0,
    "Delta": 0,
    "non_variants": 4030
  }, {
    "week": "2020-06-08",
    "Alpha": 0,
    "Beta": 0,
    "Gamma": 0,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 0,
    "Iota": 0,
    "Lambda": 0,
    "others": 0,
    "Delta": 0,
    "non_variants": 6058
  }, {
    "week": "2020-06-22",
    "Alpha": 0,
    "Beta": 0,
    "Gamma": 0,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 0,
    "Iota": 0,
    "Lambda": 0,
    "others": 0,
    "Delta": 0,
    "non_variants": 8341
  }, {
    "week": "2020-07-06",
    "Alpha": 0,
    "Beta": 0,
    "Gamma": 0,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 0,
    "Iota": 0,
    "Lambda": 0,
    "others": 0,
    "Delta": 0,
    "non_variants": 10110
  }, {
    "week": "2020-07-20",
    "Alpha": 0,
    "Beta": 0,
    "Gamma": 0,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 0,
    "Iota": 0,
    "Lambda": 0,
    "others": 0,
    "Delta": 0,
    "non_variants": 7796
  }, {
    "week": "2020-08-03",
    "Alpha": 0,
    "Beta": 0,
    "Gamma": 0,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 0,
    "Iota": 0,
    "Lambda": 0,
    "others": 1,
    "Delta": 0,
    "non_variants": 5979
  }, {
    "week": "2020-08-17",
    "Alpha": 0,
    "Beta": 0,
    "Gamma": 0,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 0,
    "Iota": 0,
    "Lambda": 0,
    "others": 1,
    "Delta": 0,
    "non_variants": 4710
  }, {
    "week": "2020-08-31",
    "Alpha": 0,
    "Beta": 0,
    "Gamma": 0,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 0,
    "Iota": 0,
    "Lambda": 0,
    "others": 4,
    "Delta": 0,
    "non_variants": 4280
  }, {
    "week": "2020-09-14",
    "Alpha": 0,
    "Beta": 0,
    "Gamma": 0,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 0,
    "Iota": 0,
    "Lambda": 0,
    "others": 12,
    "Delta": 0,
    "non_variants": 4891
  }, {
    "week": "2020-09-28",
    "Alpha": 0,
    "Beta": 0,
    "Gamma": 0,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 0,
    "Iota": 0,
    "Lambda": 0,
    "others": 31,
    "Delta": 0,
    "non_variants": 5392
  }, {
    "week": "2020-10-12",
    "Alpha": 4,
    "Beta": 0,
    "Gamma": 0,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 0,
    "Iota": 0,
    "Lambda": 0,
    "others": 46,
    "Delta": 0,
    "non_variants": 7203
  }, {
    "week": "2020-10-26",
    "Alpha": 8,
    "Beta": 0,
    "Gamma": 0,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 0,
    "Iota": 0,
    "Lambda": 0,
    "others": 55,
    "Delta": 1,
    "non_variants": 11675
  }, {
    "week": "2020-11-09",
    "Alpha": 6,
    "Beta": 0,
    "Gamma": 0,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 0,
    "Iota": 2,
    "Lambda": 0,
    "others": 165,
    "Delta": 0,
    "non_variants": 12812
  }, {
    "week": "2020-11-23",
    "Alpha": 5,
    "Beta": 0,
    "Gamma": 0,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 0,
    "Iota": 9,
    "Lambda": 0,
    "others": 530,
    "Delta": 0,
    "non_variants": 11895
  }, {
    "week": "2020-12-07",
    "Alpha": 18,
    "Beta": 0,
    "Gamma": 0,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 0,
    "Iota": 20,
    "Lambda": 0,
    "others": 1066,
    "Delta": 0,
    "non_variants": 13505
  }, {
    "week": "2020-12-21",
    "Alpha": 162,
    "Beta": 3,
    "Gamma": 0,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 1,
    "Iota": 73,
    "Lambda": 0,
    "others": 1607,
    "Delta": 0,
    "non_variants": 17388
  }, {
    "week": "2020-12-28",
    "Alpha": 195,
    "Beta": 4,
    "Gamma": 1,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 2,
    "Iota": 82,
    "Lambda": 0,
    "others": 2747,
    "Delta": 0,
    "non_variants": 13703
  }, {
    "week": "2021-01-11",
    "Alpha": 659,
    "Beta": 10,
    "Gamma": 8,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 25,
    "Iota": 245,
    "Lambda": 1,
    "others": 5958,
    "Delta": 1,
    "non_variants": 26699
  }, {
    "week": "2021-01-25",
    "Alpha": 1678,
    "Beta": 41,
    "Gamma": 5,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 36,
    "Iota": 786,
    "Lambda": 8,
    "others": 6502,
    "Delta": 0,
    "non_variants": 20907
  }, {
    "week": "2021-02-08",
    "Alpha": 3546,
    "Beta": 87,
    "Gamma": 23,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 23,
    "Iota": 1263,
    "Lambda": 13,
    "others": 5033,
    "Delta": 0,
    "non_variants": 19422
  }, {
    "week": "2021-02-22",
    "Alpha": 8415,
    "Beta": 172,
    "Gamma": 136,
    "Omicron": 0,
    "Kappa": 3,
    "Eta": 81,
    "Iota": 2135,
    "Lambda": 20,
    "others": 4030,
    "Delta": 2,
    "non_variants": 17053
  }, {
    "week": "2021-03-08",
    "Alpha": 18953,
    "Beta": 330,
    "Gamma": 563,
    "Omicron": 0,
    "Kappa": 23,
    "Eta": 143,
    "Iota": 4538,
    "Lambda": 59,
    "others": 4083,
    "Delta": 8,
    "non_variants": 15794
  }, {
    "week": "2021-03-22",
    "Alpha": 35643,
    "Beta": 518,
    "Gamma": 2075,
    "Omicron": 0,
    "Kappa": 44,
    "Eta": 231,
    "Iota": 7870,
    "Lambda": 93,
    "others": 2546,
    "Delta": 41,
    "non_variants": 11588
  }, {
    "week": "2021-04-05",
    "Alpha": 49304,
    "Beta": 676,
    "Gamma": 4259,
    "Omicron": 0,
    "Kappa": 126,
    "Eta": 264,
    "Iota": 9069,
    "Lambda": 151,
    "others": 1519,
    "Delta": 241,
    "non_variants": 8772
  }, {
    "week": "2021-04-19",
    "Alpha": 44936,
    "Beta": 557,
    "Gamma": 5265,
    "Omicron": 0,
    "Kappa": 96,
    "Eta": 222,
    "Iota": 6974,
    "Lambda": 188,
    "others": 746,
    "Delta": 834,
    "non_variants": 5233
  }, {
    "week": "2021-05-03",
    "Alpha": 34228,
    "Beta": 392,
    "Gamma": 4927,
    "Omicron": 0,
    "Kappa": 32,
    "Eta": 111,
    "Iota": 4448,
    "Lambda": 148,
    "others": 440,
    "Delta": 1244,
    "non_variants": 3577
  }, {
    "week": "2021-05-17",
    "Alpha": 18082,
    "Beta": 198,
    "Gamma": 3269,
    "Omicron": 0,
    "Kappa": 5,
    "Eta": 35,
    "Iota": 2168,
    "Lambda": 111,
    "others": 155,
    "Delta": 1893,
    "non_variants": 2112
  }, {
    "week": "2021-05-31",
    "Alpha": 9856,
    "Beta": 54,
    "Gamma": 2308,
    "Omicron": 0,
    "Kappa": 1,
    "Eta": 22,
    "Iota": 1039,
    "Lambda": 72,
    "others": 106,
    "Delta": 4706,
    "non_variants": 1397
  }, {
    "week": "2021-06-14",
    "Alpha": 6448,
    "Beta": 17,
    "Gamma": 1908,
    "Omicron": 0,
    "Kappa": 1,
    "Eta": 7,
    "Iota": 491,
    "Lambda": 89,
    "others": 73,
    "Delta": 11306,
    "non_variants": 1144
  }, {
    "week": "2021-06-28",
    "Alpha": 3734,
    "Beta": 17,
    "Gamma": 1495,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 2,
    "Iota": 275,
    "Lambda": 92,
    "others": 199,
    "Delta": 29218,
    "non_variants": 980
  }, {
    "week": "2021-07-12",
    "Alpha": 2154,
    "Beta": 14,
    "Gamma": 1143,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 1,
    "Iota": 103,
    "Lambda": 93,
    "others": 318,
    "Delta": 73800,
    "non_variants": 910
  }, {
    "week": "2021-07-26",
    "Alpha": 1125,
    "Beta": 5,
    "Gamma": 838,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 0,
    "Iota": 54,
    "Lambda": 73,
    "others": 239,
    "Delta": 141751,
    "non_variants": 950
  }, {
    "week": "2021-08-09",
    "Alpha": 258,
    "Beta": 2,
    "Gamma": 271,
    "Omicron": 0,
    "Kappa": 1,
    "Eta": 0,
    "Iota": 18,
    "Lambda": 31,
    "others": 135,
    "Delta": 128176,
    "non_variants": 540
  }, {
    "week": "2021-08-23",
    "Alpha": 77,
    "Beta": 2,
    "Gamma": 103,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 0,
    "Iota": 3,
    "Lambda": 7,
    "others": 24,
    "Delta": 134845,
    "non_variants": 765
  }, {
    "week": "2021-09-06",
    "Alpha": 50,
    "Beta": 0,
    "Gamma": 46,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 0,
    "Iota": 5,
    "Lambda": 1,
    "others": 83,
    "Delta": 132334,
    "non_variants": 682
  }, {
    "week": "2021-09-20",
    "Alpha": 4,
    "Beta": 2,
    "Gamma": 17,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 0,
    "Iota": 1,
    "Lambda": 0,
    "others": 2,
    "Delta": 109111,
    "non_variants": 405
  }, {
    "week": "2021-10-04",
    "Alpha": 6,
    "Beta": 0,
    "Gamma": 9,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 0,
    "Iota": 1,
    "Lambda": 0,
    "others": 1,
    "Delta": 104607,
    "non_variants": 437
  }, {
    "week": "2021-10-18",
    "Alpha": 5,
    "Beta": 0,
    "Gamma": 5,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 0,
    "Iota": 0,
    "Lambda": 0,
    "others": 0,
    "Delta": 98939,
    "non_variants": 407
  }, {
    "week": "2021-11-01",
    "Alpha": 1,
    "Beta": 0,
    "Gamma": 2,
    "Omicron": 0,
    "Kappa": 0,
    "Eta": 0,
    "Iota": 0,
    "Lambda": 0,
    "others": 1,
    "Delta": 95172,
    "non_variants": 339
  }, {
    "week": "2021-11-15",
    "Alpha": 0,
    "Beta": 0,
    "Gamma": 0,
    "Omicron": 17,
    "Kappa": 0,
    "Eta": 0,
    "Iota": 0,
    "Lambda": 0,
    "others": 0,
    "Delta": 48201,
    "non_variants": 418
  }, {
    "week": "2021-11-29",
    "Alpha": 0,
    "Beta": 0,
    "Gamma": 0,
    "Omicron": 98,
    "Kappa": 0,
    "Eta": 0,
    "Iota": 0,
    "Lambda": 0,
    "others": 0,
    "Delta": 9651,
    "non_variants": 2
  }]

  color_set = {
    "Alpha": "#8884d8",
    "Beta": "#82ca9d",
    "Gamma": "#FF8D33",
    "Delta": "#15CFBE",
    "Eta": "#F950CF",
    "Kappa": "#187C33",
    "Iota": "#155972",
    "Lambda": "#232EE4",
    "Omicron": "#BFBF21",
    "others": "#B42DF8",
    "non_variants": "#EA2323"
  }

  rename_columns = {
    "20I (Alpha, V1)": "Alpha", "20H (Beta, V2)": "Beta", "20J (Gamma, V3)": "Gamma",
    "21K (Omicron)": "Omicron", "21B (Kappa)": "Kappa", "21D (Eta)": "Eta", "21G (Lambda)": "Lambda",
    "21F (Iota)": "Iota"
  }

  counties_list = ['California', 'Florida', 'Texas', 'Colorado', 'Minnesota', 'Massachusetts', 'New York', 'Washington', 'Michigan',
    'North Carolina', 'Illinois', 'Utah', 'Arizona', 'New Jersey', 'Georgia', 'Pennsylvania', 'Maryland', 'Wisconsin', 'Indiana', 'Ohio',
    'Tennessee', 'Nevada', 'Oregon', 'Virginia', 'Connecticut', 'West Virginia', 'Missouri', 'New Mexico', 'Louisiana', 'Kentucky',
    'South Carolina', 'Alabama', 'Wyoming', 'Kansas', 'Idaho', 'Nebraska', 'Vermont', 'Arkansas', 'Iowa', 'Rhode Island', 'Alaska',
    'Maine', 'Mississippi', 'North Dakota', 'Montana', 'Hawaii', 'Delaware', 'New Hampshire',
    'Washington DC', 'Puerto Rico', 'Oklahoma', 'South Dakota', 'Virgin Islands', 'USA', 'Guam', 'Northern Mariana Islands']

  counties_regions_set = {
    "New England": ["Connecticut", "Maine", "Massachusetts", "New Hampshire", "Rhode Island", "Vermont"],
    "Mid-Atlantic": ["New Jersey", "New York", "Pennsylvania"],
    "East North Central": ["Illinois", "Indiana", "Michigan", "Ohio", "Wisconsin"],
    "West North Central": ["Iowa", "Kansas", "Minnesota", "Missouri", "Nebraska", "North Dakota", "South Dakota"],
    "South Atlantic": ["Delaware", "Florida", "Georgia", "Maryland", "North Carolina", "South Carolina", "Virginia", "Washington DC", "West Virginia"],
    "East South Central": ["Alabama", "Kentucky", "Mississippi", "Tennessee"],
    "West South Central": ["Texas", "Arkansas", "Louisiana", "Oklahoma"],
    "West Mountain": ["Arizona", "Colorado", "Idaho", "Montana", "Nevada", "New Mexico", "Utah", "Wyoming"],
    "West Pacific": ["Alaska", "California", "Hawaii", "Oregon", "Washington"],
  }


  getVarintsFromApiAsync() {

    return fetch(URL)
        .then((response) => response.json())
        .then((responseJson) => {
          return responseJson.countries;
        })
        .catch((error) => {
          console.error(error);
        });
  }


  getData() {
    return this.getVarintsFromApiAsync()
        .then((ALL_JSON) => {
          // console.log(ALL_JSON)

          let ALL_DF = new DataFrame()
          for (const county in ALL_JSON) {
            // console.log( ALL_JSON[county] )
            const length = ALL_JSON[county].week.length
            const covkeys = Object.keys(ALL_JSON[county])
            const build_obj = []
            for (var i in [...Array(length).keys()]) {
              const obj = {};
              let others = 0
              let delta = 0
              let total = 0
              let total_sequences = 0
              for (var K of covkeys) {
                if (['20A/S:98F', '21H (Mu)', '20B/S:732A', '20A/S:126A', '20E (EU1)',
                  '21C (Epsilon)', '20A/S:439K', 'S:677H.Robin1', 'S:677P.Pelican',
                  '20A.EU2', '20G/S:677H.Robin2', '20G/S:677H.Yellowhammer',
                  '20G/S:677R.Roadrunner', '20G/S:677H.Heron', '20G/S:677H.Bluebird',
                  '20G/S:677H.Quail', '20G/S:677H.Mockingbird'].indexOf(K) >= 0) {
                  others = others + ALL_JSON[county][K].at(i)
                } else if (['21A (Delta)', '21I (Delta)', '21J (Delta)'].indexOf(K) >= 0) {
                  delta = delta + ALL_JSON[county][K].at(i)
                } else if (K === "total_sequences") {
                  total_sequences = ALL_JSON[county][K].at(i)
                  continue
                } else if (K === "week") {
                  obj["week"] = ALL_JSON[county][K].at(i)
                  continue
                } else {
                  obj[this.rename_columns[K]] = ALL_JSON[county][K].at(i)
                }
                total = total + ALL_JSON[county][K].at(i)
              }
              obj["Delta"] = delta
              obj["others"] = others
              obj["non_variants"] = total_sequences - total
              obj["county"] = county
              build_obj.push(obj)
            }
            // console.log(build_obj)
            const city_DF = new DataFrame(build_obj)
            // console.log( city_DF.toString() )
            ALL_DF = ALL_DF.append(city_DF, true)
          }
          // console.log( ALL_DF.toString() )
          return ALL_DF
        })
  }


  One_Area(name) {
    let fill = "url(#" + name + ")"
    return (
        <Area type="monotone" dataKey={name} stroke={this.color_set[name]} fillOpacity={1} fill={fill}/>
    )
  }


  One_linearGradient(name) {
    return (
        <>
          <linearGradient id={name} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={this.color_set[name]} stopOpacity={0.8}/>
            <stop offset="95%" stopColor={this.color_set[name]} stopOpacity={0}/>
          </linearGradient>
        </>
    )
  }


  One_Plot(thisdata, ID) {
    return (
        <>
          <div className="out-side">
            <div className="frame">
              <div id={ID} style={{width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <ResponsiveContainer width='80%' height={500}>
                  <AreaChart width={1200} height={450} data={thisdata}
                             margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                    <Legend verticalAlign="top" height={72} iconType={"square"} width={"100%"}/>
                    <defs>
                      {/*<linearGradient id="Alpha" x1="0" y1="0" x2="0" y2="1">*/}
                      {/*  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>*/}
                      {/*  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>*/}
                      {/*</linearGradient>*/}
                      {(Object.keys(this.color_set)).map((virus) => (
                          this.One_linearGradient(virus)
                      ))}
                    </defs>
                    <XAxis dataKey="week"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    {/*<Area type="monotone" dataKey="Alpha" stroke="#8884d8" fillOpacity={1} fill="url(#Alpha)" />*/}
                    {(Object.keys(this.color_set)).map((virus) => (
                        this.One_Area(virus)
                    ))}
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </>
    )
  }


  One_Nav(county) {
    return (
        <Nav.Item>
          <Nav.Link eventKey={county}>{county}</Nav.Link>
        </Nav.Item>
    )
  }


  One_TabPane(county) {
    return (
        <Tab.Pane eventKey={county}>
          {this.One_Plot(this.data, {county})}
        </Tab.Pane>
    )
  }


  Each_County(region) {
    return (
        <Tab.Container id={region} defaultActiveKey={this.counties_regions_set[region].at(0)}>
          <Row>
            <Col sm={2}>
              <Nav variant="pills" className="flex-column">
                <strong>{region}</strong>
                {(this.counties_regions_set[region]).map((county) => (
                    this.One_Nav(county)
                ))}
              </Nav>
            </Col>
            <Col sm={10}>
              <Tab.Content>
                {(this.counties_regions_set[region]).map((county) => (
                    this.One_TabPane(county)
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
    )
  }


  Each_Region(region, indx) {
    const sty = indx % 2 ? {"paddingTop": "40px", "paddingBottom": "40px", "background": "whitesmoke"}
        : {"paddingTop": "40px", "paddingBottom": "40px"}

    return (
        <Container id={region} style={sty} fluid>
          {this.Each_County(region)}
        </Container>
    )

  }

  render() {
    // const County_JSON = this.state.ALL_DF.filter(this.state.ALL_DF.get("county").eq("Florida")).to_json({orient: 'records'});
    // console.log(County_JSON)
    this.getData().then((ALL_DF) => {
      // console.log(ALL_DF.filter(ALL_DF.get("county").eq("Florida")).toString())
      const County_JSON = ALL_DF.filter(ALL_DF.get("county").eq("Florida")).to_json({orient: 'records'});
      console.log(County_JSON)
    })
    return (
        <>
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="#USA"># 1.10 Overview of Variants in United States</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#USA">All</Nav.Link>
                <NavDropdown title="View by Counties" id="regions">
                  <NavDropdown.Item href="#New England">New England</NavDropdown.Item>
                  <NavDropdown.Item href="#Mid-Atlantic">Mid-Atlantic</NavDropdown.Item>
                  <NavDropdown.Item href="#East North Central">East North Central</NavDropdown.Item>
                  <NavDropdown.Item href="#West North Central">West North Central</NavDropdown.Item>
                  <NavDropdown.Item href="#South Atlantic">South Atlantic</NavDropdown.Item>
                  <NavDropdown.Item href="#East South Central">East South Central</NavDropdown.Item>
                  <NavDropdown.Item href="#West South Central">West South Central</NavDropdown.Item>
                  <NavDropdown.Item href="#West Mountain">West Mountain</NavDropdown.Item>
                  <NavDropdown.Item href="#West Pacific">West Pacific</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="https://github.com/hodcroftlab/covariants">Data Sources</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <Container style={{"background": "whitesmoke"}} fluid>
            <h2 style={{"textAlign": "center", "paddingTop": "30px"}}>- Whole USA- </h2>
            {this.One_Plot(this.data, "ALL_USA")}
          </Container>

          <div id="regions">
            {
              Object.keys(this.counties_regions_set).map((region, idx) => (
                  this.Each_Region(region, idx)
              ))}
          </div>

          {/*Footer*/}
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Overview of Variants in United States</Card.Title>
              <Card.Text>
                <strong>Class</strong>:COMP/ELEC 425/554 Computer Systems Architecture, Ray Simar
                <br/>
                <strong>Team</strong>: Hope-Simpson, #1.10 - How might we display variants?
                <br/>
                <strong>Author</strong>: <a href={"https://github.com/baskvava"}>Ying-Hsuan
                Chen</a> (yc144@rice.edu), <a href={"https://github.com/QuenLo"}>Cyuan-Heng Luo</a> (quenluo@rice.edu)
                <br/>
                <strong>Thanks To</strong>: Emma B. Hodcroft. 2021. "CoVariants: SARS-CoV-2 Mutations and Variants of
                Interest." <a href={"https://covariants.org/"}>https://covariants.org/</a>
              </Card.Text>
              <Button variant="primary" href={"https://github.com/baskvava/CoVariants"}>CoVariants (Github)</Button>
            </Card.Body>
            <Card.Footer className="text-muted">@2021 Rice Comp 554 Hope-Simpson</Card.Footer>
          </Card>
        </>
    );
  }

}

export default App;
