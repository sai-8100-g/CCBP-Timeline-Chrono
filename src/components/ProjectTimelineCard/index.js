import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const Project = props => {
  const {data} = props
  const {projectTitle, description, duration, imageUrl, projectUrl} = data
  console.log(data)
  return (
    <div className="project-timeline-card">
      <img src={imageUrl} alt="project" />
      <div className="project-heading-card">
        <h1>{projectTitle}</h1>
        <div className="project-calender-card">
          <AiFillCalendar className="calender" />
          <p>{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a className="anchor-element" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default Project
