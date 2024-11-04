
function Resume() {
    
    const styles = {
        mainDiv:{
            padding: "1px 8px",
            textAlign: "center",
            backgroundColor: "rgb(241 241 241)",
        }
    }


    return (
        <div style={styles.mainDiv}>    
            
            <h1>Isaiah Hansen</h1>
            <div>
                <h2>Summary:</h2>
                <p>
                        Experienced front-end web developer specializing in building interactive and responsive user interfaces.
                    Proficient in HTML, CSS, JavaScript, and modern frameworks such as React and TypeScript. 
                    Demonstrated ability to contribute to collaborative projects with strong problem-solving skills and attention to code quality, including comprehensive use of Bootstrap.
                    Adept at leveraging version control systems like Git and working effectively with development tools such as Visual Studio Code and Postman.\
                    Successfully led and executed key roles on project teams, including full page structuring and responsive design integration.
                    Recognized for clear code documentation and implementation in web development projects.
                    Completed extensive web development training through SMU's Full Stack Web Development Boot Camp and supplemental coursework in JavaScript programming.
                </p>  
            </div>
            
            <div>
                <h2>Technical Skills</h2>
                <p><strong>Technical Languages:</strong> HTML, CSS, JavaScript</p>
                <p><strong>Frameworks and Libraries:</strong> Typescript, React, Bootstrap, jQuery ,  Node.js, Express</p>
                <p><strong>Version Control:</strong> Git, GitHub</p>
                <p><strong>Applications:</strong> Visual Studio Code, Chrome DevTools, Postman</p>
            </div>
            <div>
                <h2>Projects </h2>
                <p>
                    <strong>Party Planner</strong> <br />
                    GitHub: https://github.com/angiethelibrarian/Party-Planner-Project1 <br /> 
                    Deployed Project: https://angiethelibrarian.github.io/Party-Planner-Project1/  <br />
                    Summary: For organizing guests and their delegated tasks, this site is meant be used by someone hosting an event. <br />
                    Responsibilities: complete HTML Page, starter CSS code, page responsiveness, implement Bootstraps, cleanup and commenting code <br />
                    Tools and Languages: HTML, CSS, JavaScript, Bootstrap, Visual Studio Code <br />
                </p>
            </div> 
            <div>
                <h2>Education</h2>
                <p>
                   <strong> Full Stack Web Development Boot Camp Certificate: SMU, Online </strong> <br />
                    An intensive program focused on gaining technical programming skills in HTML, CSS, JavaScript, Node.js, npm, Typescript, SQL, MongoDB, Express, and ReactJS.
                </p>
                <p>
                    <strong>Computer programming - JavaScript and the web: Khan Acadamy, Online</strong>
                </p>
            </div>
        </div>
    )
}

export default Resume