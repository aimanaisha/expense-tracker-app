import './Chart.css'
import ChartBar from './chartBar'

const Chart=(props)=>{

    const maxvals = props.dataPoint.map(eachelement => eachelement.value) 
    const maxValue = Math.max(...maxvals)

    return(

        <div className='chart'>
            {props.dataPoint.map((eachdata)=>(
            <ChartBar 
                maxValue={maxValue} 
                label={eachdata.label} 
                value={eachdata.value}
                key={eachdata.label}/>
    ))}
        </div>
    )
}
export default Chart;