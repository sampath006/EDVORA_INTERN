import { useState, useEffect } from "react";


const FilterRides = (props)=>{
    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])

    let s_visited = [], c_visited = [], stateFilter;

    useEffect(() => {
        if(props.data) {
            calculateStateOptions(props.data);
        }
    }, [props.data])
    const stateFilterHandler = async(e) => {
        props.onHandleStateFilter(e.target.value);
        stateFilter  = e.target.value;
        calculateCityOptions(props.data, stateFilter)
    }
    const cityFilterHandler = (e) => {
        props.onHandleCityFilter(e.target.value)
    }

    const calculateStateOptions = (data) => {
        data.forEach(ele => {
            let s = ele.state.toLowerCase()
            if(!s_visited.includes(s)) {
                s_visited.push(s)
            }
        });
        setStates(s_visited);
        s_visited = []
    }
    
    const calculateCityOptions = (data, stateFilter) => {
        data.forEach(ele => {
            let c = ele.city.toLowerCase()
            let s = ele.state.toLowerCase()
            if(s === stateFilter) {
                if(!c_visited.includes(c)) {
                    c_visited.push(c)
                }
                setCities(c_visited);
            }
            console.log(c_visited)
            
        })
        c_visited = []
        }

    const stateOptions = states.map((ele) => 
        <option value={ele}>{ele}</option>
    );
    const cityOptions = cities.map((ele) => 
        <option value={ele}>{ele}</option>
    );

    return (
        <div className="filter_options">
            <h4 className="filter_title">Filters</h4>
            <span className="sep_line"></span>
            <div>
                <select name="state_options" id="state_options" onChange={stateFilterHandler}>
                    <option selected="selected">State</option>
                    {stateOptions}
                </select>
            </div>
            <div>
                <select name="city_options" id="city_options" onChange={cityFilterHandler}>
                    <option selected="selected">City</option>
                    {cityOptions}
                </select>
            </div>
        </div>
    )
}
export default FilterRides