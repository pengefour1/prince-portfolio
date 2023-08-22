import React from 'react'
import './Qualification.css'
import { useState } from 'react'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }
  return (
    <section id='qualification' className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className='section__subtitle'>My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ?
                     "qualification__button qualification__active button--flex" 
                     : "qualification__button button--flex" }
                     onClick={()=> toggleTab(1)}>
                    <i className="uil uil-graduation-cap"></i>{" "} &nbsp; Education and &nbsp;{<i className='uil uil-briefcase-alt'/>}
                    &nbsp; Experience
                </div>

                {/* <div className={
                    toggleState === 2 ?
                     "qualification__button qualification__active button--flex" 
                     : "qualification__button button--flex" }
                     onClick={()=> toggleTab(2)}>
                    <i className="uil uil-briefcase-alt"></i>Experience
                </div> */}
            </div>
           

            <div className="qualification__sections">
            
                <div className={
                    toggleState === 1 
                    ? "qualification__content qualification__content-active" 
                    : "qualification__content"  }>
                
                    <div className="qualification__data">
                        <div>
                            
                            <h3 className="qualification__title">Master's in Computer Science</h3>
                            <span className='qualification__subtitle'>San Francisco Bay University</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className='qualification__line'></span>
                        </div>
                        
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className='qualification__line'></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Full Stack Web Developer</h3>
                            <span className='qualification__subtitle'>The Reciprocal Solutions</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2020 - 2022
                            </div>
                        </div>

                       
                        
                    </div>
                    <div className="qualification__data">
                        <div>
                            
                            <h3 className="qualification__title">Front End Developer Internship</h3>
                            <span className='qualification__subtitle'>The Reciprocal Solutions</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2020 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className='qualification__line'></span>
                        </div>
                        
                    </div>
    
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className='qualification__line'></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Bachelor's in Computer Engineering</h3>
                            <span className='qualification__subtitle'>SNS College of Technology</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2017 - 2021
                            </div>
                        </div>

                       
                        
                    </div>

                   
                </div>
            </div>
            {/* <div className="qualification__sections">
            
                <div className={
                    toggleState === 2 
                    ? "qualification__content qualification__content-active" 
                    : "qualification__content"  }>
                
                    <div className="qualification__data">
                        <div>
                            
                            <h3 className="qualification__title">Full Stack developer</h3>
                            <span className='qualification__subtitle'>The Reciprocal Solutions</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2021 - 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className='qualification__line'></span>
                        </div>
                        
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className='qualification__line'></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Bachelor's in Computer Engineering</h3>
                            <span className='qualification__subtitle'>SNS College of Technology</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2017 - 2021
                            </div>
                        </div>

                       
                        
                    </div>
                    <div className="qualification__data">
                        <div>
                            
                            <h3 className="qualification__title">Master's in Computer Science</h3>
                            <span className='qualification__subtitle'>San Francisco Bay University</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className='qualification__line'></span>
                        </div>
                        
                    </div>
    
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className='qualification__line'></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Bachelor's in Computer Engineering</h3>
                            <span className='qualification__subtitle'>SNS College of Technology</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2017 - 2021
                            </div>
                        </div>

                       
                        
                    </div>

                   
                </div>
            </div> */}
           

        </div>
    </section>
  )
}

export default Qualification
