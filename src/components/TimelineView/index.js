import {Chrono} from 'react-chrono'
import Course from '../CourseTimelineCard'
import Project from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="chorno-card">
      <h1>
        MY JOURNEY OF <br /> CCBP 4.0
      </h1>
      <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
        {timelineItemsList.map(eachObj =>
          eachObj.categoryId === 'COURSE' ? (
            <Course data={eachObj} key={eachObj.id} />
          ) : (
            <Project data={eachObj} key={eachObj.id} />
          ),
        )}
      </Chrono>
    </div>
  )
}

export default TimelineView
