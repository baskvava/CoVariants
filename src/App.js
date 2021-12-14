import logo from './logo.svg';
import './App.css';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';

// const data = [
//   {
//     "name": "Page A",
//     "uv": 4000,
//     "pv": 2400,
//     "amt": 2400
//   },
//   {
//     "name": "Page B",
//     "uv": 3000,
//     "pv": 1398,
//     "amt": 2210
//   },
//   {
//     "name": "Page C",
//     "uv": 2000,
//     "pv": 9800,
//     "amt": 2290
//   },
//   {
//     "name": "Page D",
//     "uv": 2780,
//     "pv": 3908,
//     "amt": 2000
//   },
//   {
//     "name": "Page E",
//     "uv": 1890,
//     "pv": 4800,
//     "amt": 2181
//   },
//   {
//     "name": "Page F",
//     "uv": 2390,
//     "pv": 3800,
//     "amt": 2500
//   },
//   {
//     "name": "Page G",
//     "uv": 3490,
//     "pv": 4300,
//     "amt": 2100
//   }
// ]
const data = [{
  "week":"2020-04-27",
  "Alpha":0,
  "Beta":0,
  "Gamma":0,
  "Omicron":0,
  "Kappa":0,
  "Eta":0,
  "Iota":0,
  "Lambda":0,
  "others":0,
  "Delta":0,
  "non_variants":5693},{"week":"2020-05-11","Alpha":0,"Beta":0,"Gamma":0,"Omicron":0,"Kappa":0,"Eta":0,"Iota":0,"Lambda":0,"others":0,"Delta":0,"non_variants":4711},{"week":"2020-05-25","Alpha":0,"Beta":0,"Gamma":0,"Omicron":0,"Kappa":0,"Eta":0,"Iota":0,"Lambda":0,"others":0,"Delta":0,"non_variants":4030},{"week":"2020-06-08","Alpha":0,"Beta":0,"Gamma":0,"Omicron":0,"Kappa":0,"Eta":0,"Iota":0,"Lambda":0,"others":0,"Delta":0,"non_variants":6058},{"week":"2020-06-22","Alpha":0,"Beta":0,"Gamma":0,"Omicron":0,"Kappa":0,"Eta":0,"Iota":0,"Lambda":0,"others":0,"Delta":0,"non_variants":8341},{"week":"2020-07-06","Alpha":0,"Beta":0,"Gamma":0,"Omicron":0,"Kappa":0,"Eta":0,"Iota":0,"Lambda":0,"others":0,"Delta":0,"non_variants":10110},{"week":"2020-07-20","Alpha":0,"Beta":0,"Gamma":0,"Omicron":0,"Kappa":0,"Eta":0,"Iota":0,"Lambda":0,"others":0,"Delta":0,"non_variants":7796},{"week":"2020-08-03","Alpha":0,"Beta":0,"Gamma":0,"Omicron":0,"Kappa":0,"Eta":0,"Iota":0,"Lambda":0,"others":1,"Delta":0,"non_variants":5979},{"week":"2020-08-17","Alpha":0,"Beta":0,"Gamma":0,"Omicron":0,"Kappa":0,"Eta":0,"Iota":0,"Lambda":0,"others":1,"Delta":0,"non_variants":4710},{"week":"2020-08-31","Alpha":0,"Beta":0,"Gamma":0,"Omicron":0,"Kappa":0,"Eta":0,"Iota":0,"Lambda":0,"others":4,"Delta":0,"non_variants":4280},{"week":"2020-09-14","Alpha":0,"Beta":0,"Gamma":0,"Omicron":0,"Kappa":0,"Eta":0,"Iota":0,"Lambda":0,"others":12,"Delta":0,"non_variants":4891},{"week":"2020-09-28","Alpha":0,"Beta":0,"Gamma":0,"Omicron":0,"Kappa":0,"Eta":0,"Iota":0,"Lambda":0,"others":31,"Delta":0,"non_variants":5392},{"week":"2020-10-12","Alpha":4,"Beta":0,"Gamma":0,"Omicron":0,"Kappa":0,"Eta":0,"Iota":0,"Lambda":0,"others":46,"Delta":0,"non_variants":7203},{"week":"2020-10-26","Alpha":8,"Beta":0,"Gamma":0,"Omicron":0,"Kappa":0,"Eta":0,"Iota":0,"Lambda":0,"others":55,"Delta":1,"non_variants":11675},{"week":"2020-11-09","Alpha":6,"Beta":0,"Gamma":0,"Omicron":0,"Kappa":0,"Eta":0,"Iota":2,"Lambda":0,"others":165,"Delta":0,"non_variants":12812},{"week":"2020-11-23","Alpha":5,"Beta":0,"Gamma":0,"Omicron":0,"Kappa":0,"Eta":0,"Iota":9,"Lambda":0,"others":530,"Delta":0,"non_variants":11895},{"week":"2020-12-07","Alpha":18,"Beta":0,"Gamma":0,"Omicron":0,"Kappa":0,"Eta":0,"Iota":20,"Lambda":0,"others":1066,"Delta":0,"non_variants":13505},{"week":"2020-12-21","Alpha":162,"Beta":3,"Gamma":0,"Omicron":0,"Kappa":0,"Eta":1,"Iota":73,"Lambda":0,"others":1607,"Delta":0,"non_variants":17388},{"week":"2020-12-28","Alpha":195,"Beta":4,"Gamma":1,"Omicron":0,"Kappa":0,"Eta":2,"Iota":82,"Lambda":0,"others":2747,"Delta":0,"non_variants":13703},{"week":"2021-01-11","Alpha":659,"Beta":10,"Gamma":8,"Omicron":0,"Kappa":0,"Eta":25,"Iota":245,"Lambda":1,"others":5958,"Delta":1,"non_variants":26699},{"week":"2021-01-25","Alpha":1678,"Beta":41,"Gamma":5,"Omicron":0,"Kappa":0,"Eta":36,"Iota":786,"Lambda":8,"others":6502,"Delta":0,"non_variants":20907},{"week":"2021-02-08","Alpha":3546,"Beta":87,"Gamma":23,"Omicron":0,"Kappa":0,"Eta":23,"Iota":1263,"Lambda":13,"others":5033,"Delta":0,"non_variants":19422},{"week":"2021-02-22","Alpha":8415,"Beta":172,"Gamma":136,"Omicron":0,"Kappa":3,"Eta":81,"Iota":2135,"Lambda":20,"others":4030,"Delta":2,"non_variants":17053},{"week":"2021-03-08","Alpha":18953,"Beta":330,"Gamma":563,"Omicron":0,"Kappa":23,"Eta":143,"Iota":4538,"Lambda":59,"others":4083,"Delta":8,"non_variants":15794},{"week":"2021-03-22","Alpha":35643,"Beta":518,"Gamma":2075,"Omicron":0,"Kappa":44,"Eta":231,"Iota":7870,"Lambda":93,"others":2546,"Delta":41,"non_variants":11588},{"week":"2021-04-05","Alpha":49304,"Beta":676,"Gamma":4259,"Omicron":0,"Kappa":126,"Eta":264,"Iota":9069,"Lambda":151,"others":1519,"Delta":241,"non_variants":8772},{"week":"2021-04-19","Alpha":44936,"Beta":557,"Gamma":5265,"Omicron":0,"Kappa":96,"Eta":222,"Iota":6974,"Lambda":188,"others":746,"Delta":834,"non_variants":5233},{"week":"2021-05-03","Alpha":34228,"Beta":392,"Gamma":4927,"Omicron":0,"Kappa":32,"Eta":111,"Iota":4448,"Lambda":148,"others":440,"Delta":1244,"non_variants":3577},{"week":"2021-05-17","Alpha":18082,"Beta":198,"Gamma":3269,"Omicron":0,"Kappa":5,"Eta":35,"Iota":2168,"Lambda":111,"others":155,"Delta":1893,"non_variants":2112},{"week":"2021-05-31","Alpha":9856,"Beta":54,"Gamma":2308,"Omicron":0,"Kappa":1,"Eta":22,"Iota":1039,"Lambda":72,"others":106,"Delta":4706,"non_variants":1397},{"week":"2021-06-14","Alpha":6448,"Beta":17,"Gamma":1908,"Omicron":0,"Kappa":1,"Eta":7,"Iota":491,"Lambda":89,"others":73,"Delta":11306,"non_variants":1144},{"week":"2021-06-28","Alpha":3734,"Beta":17,"Gamma":1495,"Omicron":0,"Kappa":0,"Eta":2,"Iota":275,"Lambda":92,"others":199,"Delta":29218,"non_variants":980},{"week":"2021-07-12","Alpha":2154,"Beta":14,"Gamma":1143,"Omicron":0,"Kappa":0,"Eta":1,"Iota":103,"Lambda":93,"others":318,"Delta":73800,"non_variants":910},{"week":"2021-07-26","Alpha":1125,"Beta":5,"Gamma":838,"Omicron":0,"Kappa":0,"Eta":0,"Iota":54,"Lambda":73,"others":239,"Delta":141751,"non_variants":950},{"week":"2021-08-09","Alpha":258,"Beta":2,"Gamma":271,"Omicron":0,"Kappa":1,"Eta":0,"Iota":18,"Lambda":31,"others":135,"Delta":128176,"non_variants":540},{"week":"2021-08-23","Alpha":77,"Beta":2,"Gamma":103,"Omicron":0,"Kappa":0,"Eta":0,"Iota":3,"Lambda":7,"others":24,"Delta":134845,"non_variants":765},{"week":"2021-09-06","Alpha":50,"Beta":0,"Gamma":46,"Omicron":0,"Kappa":0,"Eta":0,"Iota":5,"Lambda":1,"others":83,"Delta":132334,"non_variants":682},{"week":"2021-09-20","Alpha":4,"Beta":2,"Gamma":17,"Omicron":0,"Kappa":0,"Eta":0,"Iota":1,"Lambda":0,"others":2,"Delta":109111,"non_variants":405},{"week":"2021-10-04","Alpha":6,"Beta":0,"Gamma":9,"Omicron":0,"Kappa":0,"Eta":0,"Iota":1,"Lambda":0,"others":1,"Delta":104607,"non_variants":437},{"week":"2021-10-18","Alpha":5,"Beta":0,"Gamma":5,"Omicron":0,"Kappa":0,"Eta":0,"Iota":0,"Lambda":0,"others":0,"Delta":98939,"non_variants":407},{"week":"2021-11-01","Alpha":1,"Beta":0,"Gamma":2,"Omicron":0,"Kappa":0,"Eta":0,"Iota":0,"Lambda":0,"others":1,"Delta":95172,"non_variants":339},{"week":"2021-11-15","Alpha":0,"Beta":0,"Gamma":0,"Omicron":17,"Kappa":0,"Eta":0,"Iota":0,"Lambda":0,"others":0,"Delta":48201,"non_variants":418},{"week":"2021-11-29","Alpha":0,"Beta":0,"Gamma":0,"Omicron":98,"Kappa":0,"Eta":0,"Iota":0,"Lambda":0,"others":0,"Delta":9651,"non_variants":2}]
    
function App() {
  return (
    <>
      <div className='nav-bar'>
        <h1 style={{padding:0, margin: 0}}>CoVariants in the U.S.</h1>
      </div>
      <div className="out-side">
        <div className="frame">
          <div>
            <div className="display">
              <div className="display-out-side">
                <div className="square" style={{backgroundColor: '#8884d8'}}></div>
                <span className="annotation">Alpha</span>
              </div>
              <div className="display-out-side">
                <div className="square" style={{backgroundColor: '#82ca9d'}}></div>
                <span className="annotation">Beta</span>
              </div>
              <div className="display-out-side">
                <div className="square" style={{backgroundColor: '#FF8D33'}}></div>
                <span className="annotation">Gamma</span>
              </div>
              <div className="display-out-side">
                <div className="square" style={{backgroundColor: '#BFBF21'}}></div>
                <span className="annotation">Omicron</span>
              </div>
              <div className="display-out-side">
                <div className="square" style={{backgroundColor: '#187C33'}}></div>
                <span className="annotation">Kappa</span>
              </div>
              <div className="display-out-side">
                <div className="square" style={{backgroundColor: '#F950CF'}}></div>
                <span className="annotation">Eta</span>
              </div>
              <div className="display-out-side">
                <div className="square" style={{backgroundColor: '#155972'}}></div>
                <span className="annotation">Iota</span>
              </div>
              <div className="display-out-side">
                <div className="square" style={{backgroundColor: '#232EE4'}}></div>
                <span className="annotation">Lambda</span>
              </div>
              <div className="display-out-side">
                <div className="square" style={{backgroundColor: '#B42DF8'}}></div>
                <span className="annotation">others</span>
              </div>
              <div className="display-out-side">
                <div className="square" style={{backgroundColor: '#15CFBE'}}></div>
                <span className="annotation">Delta</span>
              </div>
              <div className="display-out-side">
                <div className="square" style={{backgroundColor: '#EA2323'}}></div>
                <span className="annotation">non_variants</span>
              </div>
            </div>
            <AreaChart width={1230} height={450} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="Alpha" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="Beta" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="Gamma" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF8D33" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#FF8D33" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="Omicron" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#BFBF21" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#BFBF21" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="Kappa" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#187C33" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#187C33" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="Eta" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F950CF" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#F950CF" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="Iota" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#155972" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#155972" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="Lambda" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#232EE4" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#232EE4" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="others" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#B42DF8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#B42DF8" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="Delta" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#15CFBE" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#15CFBE" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="non_variants" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EA2323" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#EA2323" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="week" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="Alpha" stroke="#8884d8" fillOpacity={1} fill="url(#Alpha)" />
            <Area type="monotone" dataKey="Beta" stroke="#82ca9d" fillOpacity={1} fill="url(#Beta)" />
            <Area type="monotone" dataKey="Gamma" stroke="#FF8D33" fillOpacity={1} fill="url(#Gamma)" />
            <Area type="monotone" dataKey="Omicron" stroke="#BFBF21" fillOpacity={1} fill="url(#Omicron)" />
            <Area type="monotone" dataKey="Kappa" stroke="#187C33" fillOpacity={1} fill="url(#Kappa)" />
            <Area type="monotone" dataKey="Eta" stroke="#F950CF" fillOpacity={1} fill="url(#Eta)" />
            <Area type="monotone" dataKey="Iota" stroke="#155972" fillOpacity={1} fill="url(#Iota)" />
            <Area type="monotone" dataKey="Lambda" stroke="#232EE4" fillOpacity={1} fill="url(#Lambda)" />
            <Area type="monotone" dataKey="others" stroke="#B42DF8" fillOpacity={1} fill="url(#others)" />
            <Area type="monotone" dataKey="Delta" stroke="#15CFBE" fillOpacity={1} fill="url(#Delta)" />
            <Area type="monotone" dataKey="non_variants" stroke="#EA2323" fillOpacity={1} fill="url(#non_variants)" />
          </AreaChart>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
