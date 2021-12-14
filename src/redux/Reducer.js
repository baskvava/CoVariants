import {
    GETDATA,
} from "./Actions";
import {DataFrame} from "pandas-js";


function processData(ALL_JSON) {
    const rename_columns = {
        "20I (Alpha, V1)": "Alpha", "20H (Beta, V2)": "Beta", "20J (Gamma, V3)": "Gamma",
        "21K (Omicron)": "Omicron", "21B (Kappa)": "Kappa", "21D (Eta)": "Eta", "21G (Lambda)": "Lambda",
        "21F (Iota)": "Iota"
    }
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
                        obj[rename_columns[K]] = ALL_JSON[county][K].at(i)
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
}
const initialState = {
    ALL_DF : new DataFrame()
}

export function userApp( state= initialState, action ) {

    switch( action.type ){
        // case REQUEST_USERS:
        //     return { ...state, users: action.users };

        case GETDATA:
            console.log(processData(action.ALL_JSON).toString())
            return { ALL_DF: processData(action.ALL_JSON) }

        default:
            return state;
    }
    return state;
}