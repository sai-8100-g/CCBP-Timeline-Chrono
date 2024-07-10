import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const Course = props => {
  const {data} = props
  const {courseTitle, description, duration, tagsList} = data
  return (
    <div>
      <div className="project-heading-card">
        <h1 className="title">{courseTitle}</h1>
        <div className="project-calender-card">
          <AiFillClockCircle className="calender" />
          <p>{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul>
        {tagsList.map(eachObj => (
          <li key={eachObj.id}>
            <p>{eachObj.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Course
