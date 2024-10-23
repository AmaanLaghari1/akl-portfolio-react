import React from "react";

const Skills = props => {
    let skillSet = [
        {
            name: 'HTML5 and CSS',
            level: '90%',
            class: 'danger'
        },
        {
            name: 'JavaScript',
            level: '85%',
            class: 'warning'
        },
        {
            name: 'jQuery and Bootstrap5',
            level: '90%',
            class: 'secondary'
        },
        {
            name: 'React',
            level: '75%',
            class: 'info'
        },
        {
            name: 'PHP',
            level: '90%',
            class: 'dark'
        },
        {
            name: 'MySQL and MongoDB',
            level: '85%',
            class: 'warning'
        },
        {
            name: 'Laravel',
            level: '80%',
            class: 'dark'
        },
        {
            name: 'NodeJS and Express',
            level: '80%',
            class: 'dark'
        },
        {
            name: 'OOP concepts',
            level: '90%',
            class: 'primary'
        },
        {
            name: 'AJAX',
            level: '80%',
            class: 'info'
        },
        {
            name: 'REST API',
            level: '80%',
            class: 'success'
        },
        {
            name: 'Version Control (GIT)',
            level: '80%',
            class: 'secondary'
        },
    ]
    return (
        <section id="Expertise" className="container-fluid d-flex align-items-center" style={{minHeight: "100vh"}}>
        <div className="container">
        <div className="row">
        <h3 className="section-title text-center my-5">My Expertise</h3>
        {
            skillSet.map((item, index) => {
                return (
                <div className="col-12 col-sm-6 px-3" key={index}>
                    <h4 className="my-2">{item.name}</h4>
                    <div className="progress">
                        <div style={{width: item.level}} className={"progress-bar progress-bar-striped progress-bar-animated bg-"+item.class} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">{item.level}</div>
                    </div>
                </div>
                )
            })
        }
        </div>
        </div>
        </section>
    )
}

export default Skills