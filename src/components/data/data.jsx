import css from './data.module.css'
import PropTypes from 'prop-types'

export const StatisticData = ({ title, stats }) =>{
    return (
       <section className="statistics">
  <h2 className={css.title}>Upload stats</h2>

    <ul className={css.statlist}>
                {stats.map(({ id, label, percentage }) =>(
                  <li className={css.item} key={id}>
                <span className="label">{label}</span>
                <span className="percentage">{percentage}%</span>
                </li>
                ))}
   
    </ul>
    </section>)
   
  }  
    
    StatisticData.protoTypes = {
    stats:PropTypes.string.isRequired
}