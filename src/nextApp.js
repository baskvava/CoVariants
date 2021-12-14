import './App.css';
import {AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, Legend, ResponsiveContainer, Label} from 'recharts';
import Button from 'react-bootstrap/Button';
import {Badge, Card, Col, Container, Nav, Navbar, NavDropdown, Row, Spinner, Tab, Tabs} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { DataFrame } from 'pandas-js';
import React from "react";
import { connect } from 'react-redux';
import {getdata} from "./redux/Actions";
let URL = "https://raw.githubusercontent.com/hodcroftlab/covariants/master/cluster_tables/USAClusters_data.json";

class App extends React.Component {

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


  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    fetch(URL)
        .then(res => res.json())
        .then(res =>
        {
          let ALL_JSON = res.countries;
          this.props.getData(ALL_JSON);
        }
        );
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


  getData_K() {
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
                    {/*<XAxis dataKey="week">*/}
                    {/*  <Label value="Date" offset={0} position="insideBottom" />*/}
                    {/*</XAxis>*/}
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

    if( this.props.ALL_DF.length > 1 ){
      let DF = this.props.ALL_DF;
      const County_JSON = DF.filter(DF.get("county").eq(county)).to_json({orient: 'records'});
      // console.log(County_JSON)
      return (
          <Tab.Pane eventKey={county}>
            {this.One_Plot(County_JSON, {county})}
          </Tab.Pane>
      )
    }else{
     return(
         <Tab.Pane eventKey={county}>
           <Spinner style={{"textAlign": "center"}} animation="border" />
         </Tab.Pane>
     )
    }
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

  calling_all(){
    if(this.props.ALL_USA_JSON.length > 0){
      return( this.One_Plot(this.props.ALL_USA_JSON, "ALL_USA") )
    }else{
      return(
          <Spinner style={{"textAlign": "center"}} animation="border" />
      )
    }
  }

  render() {

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
            {this.calling_all()}
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

const mapStateToProps = (state) => {
  return {
    // users_all: state.users,
    ALL_DF: state.ALL_DF,
    ALL_USA_JSON: state.ALL_USA_JSON
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // requestUsers: (js) => dispatch(requestUsers(js)),
    getData: (ALL_JSON) => dispatch(getdata(ALL_JSON))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)  (App);

// export default App;
