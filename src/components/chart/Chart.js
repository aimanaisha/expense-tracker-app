import './Chart.css'
import ChartBar from './chartBar'

const Chart=(props)=>{
    
    return(

        <div className='chart'>
            {props.dataPoint.map((eachdata)=>{
            <ChartBar 
                maxValue={null} 
                label={eachdata.label} 
                value={eachdata.value}
                key={eachdata.label}/>
            })}
        </div>
    )
}
export default Chart;