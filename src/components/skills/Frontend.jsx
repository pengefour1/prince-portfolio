import React from 'react'


const Frontend = () => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>Frontend Development</h3>

      <div className='skills__box'>
        <div className='skills__group'>
            <div className="skills__data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">HTML, CSS</h3>
                    <span className='skills__level'>advanced</span>

                </div>
            </div>

            <div className="skills__data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Tailwind</h3>
                    <span className='skills__level'>intermediate</span>

                </div>
            </div>

            <div className="skills__data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">JavaScript</h3>
                    <span className='skills__level'>advanced</span>

                </div>
            </div>
        </div>

        <div className='skills__group'>
            <div className="skills__data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Material UI</h3>
                    <span className='skills__level'>intermediate</span>

                </div>
            </div>

            <div className="skills__data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">React</h3>
                    <span className='skills__level'>advanced</span>

                </div>
            </div>

            <div className="skills__data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">BootStrap</h3>
                    <span className='skills__level'>intermediate</span>

                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Frontend
