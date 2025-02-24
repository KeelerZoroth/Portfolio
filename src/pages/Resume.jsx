// import { useState, useEffect } from "react";

function Resume() {
    // const [resumeData, setResumeData] = useState([]);
    
    //   useEffect(() => {
    //     const fetchData = async () => {
    //       const response = await fetch('./resumeData.json');
    //       const jsonData = await response.json();
    //       setResumeData(jsonData);
    //     };
    
    //     fetchData();
    //   }, []);

    const styles = {
        mainDiv:{
            padding: "1px 8px",
            textAlign: "center",
            backgroundColor: "rgb(241 241 241)",
        },
        resumeFlexDev: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        },
        downloadLinkDiv:{
            width: "100px",
            padding: "5px 5px",
            margin: "8px 5px",
            backgroundColor: "rgb(80, 80, 80)",
            border: "3px solid rgb(15, 40, 40)",
        },
        downloadLink:{
            textDecoration: "none",
            color: "rgb(0, 150, 255)"
        },
        resumePs:{
            margin: "8px auto",
            padding: "0px 6px",
            borderColor: "gray",
            borderStyle: "solid",
            borderTopWidth: "0px",
            borderBottomWidth: "0px",
            borderRightWidth: "3px",
            borderleftWidth: "3px"
        }
    }


    return (
        <div style={styles.mainDiv}>    
            <div style={styles.downloadLinkDiv}>
                <a style={styles.downloadLink} href="/Public Resume.docx" download>Download Resume</a>
            </div>
            {/* <div style={styles.resumeFlexDev}>
            {resumeData.text &&

            resumeData.text.split("\n").map(
                (arrValue, indexKey) => {
                    if(arrValue){
                        return (
                        
                            <span key={indexKey} style={styles.resumePs}>{arrValue}</span>
                        
                        )
                    }
                })}
            
            </div> */}
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
                <p><strong>Technical Languages:</strong> HTML, CSS, JavaScript, TypeScript</p>
                <p><strong>Tools & Technologies:</strong> Visual Studio Code, Postman, Chrome DevTools, Bootstrap, jQuery, Git, GitHub, Node.js, npm, React.js, Express.js, PostgreSQL (with Sequelize), MongoDB (with Mongoose), GraphQL, Cypress</p>
            </div>
            <div>
                <h2>Projects</h2>
                
                <h3><strong>Snippet</strong></h3>
                <p>
                    <strong>GitHub:</strong> https://github.com/KeelerZoroth/Portfolio <br />
                    <strong>Site:</strong> https://snippet-vzjo.onrender.com/ <br />
                    <strong>Summary:</strong> For programmers to search for small bits of code, or have their own code explained by AI. Using the ChatGPT API to appraise code, it stores the code snippet along with a title and summary for others to use later. <br />
                    <strong>Responsibilities:</strong> Project Setup and Deployment, AI API, authentication, code review <br />
                    <strong>Tools and Languages:</strong> ChatGPT API, React.js, CSS, TypeScript, Express.js, MongoDB, GitHub Actions, Visual Studio Code <br />
                </p>
                
                <h3><strong>Group Calendar</strong></h3>
                <p>
                    <strong>GitHub:</strong> https://github.com/KeelerZoroth/Group-Calendar <br />
                    <strong>Site:</strong> https://group-calendar-a5hu.onrender.com/ <br />
                    <strong>Summary:</strong> For event management, allowing involvement in multiple groups to have one place to view it all. <br />
                    <strong>Responsibilities:</strong> Project Setup and Deployment, Project Lead, Backend, API, authentication, review and fix code <br />
                    <strong>Tools and Languages:</strong> React.js, CSS, TypeScript, Express.js, PostgreSQL, Visual Studio Code <br />
                </p>
                
                <h3><strong>Party Planner</strong></h3>
                <p>
                    <strong>GitHub:</strong> https://github.com/angiethelibrarian/Party-Planner-Project1 |
                    <strong><em> Not Deployed</em></strong> <br />
                    <strong>Summary:</strong> For organizing guests and their delegated tasks, this site is meant be used by someone hosting an event. <br />
                    <strong>Responsibilities:</strong> complete HTML Page, starter CSS code, page responsiveness, implement Bootstraps, cleanup and commenting code <br />
                    <strong>Tools and Languages:</strong> HTML, CSS, JavaScript, Bootstrap, Visual Studio Code <br />
                </p>
            </div> 
            <div>
                <h2>Education</h2>
                <p>
                   <strong> Full Stack Web Development Boot Camp Certificate: SMU, Online </strong> <br />
                    An intensive program focused on gaining technical programming skills in HTML, CSS, JavaScript, Node.js, npm, Typescript, SQL, MongoDB, Express, and ReactJS.
                </p>
                <p>
                    <strong>Computer programming - JavaScript and the web: Khan Acadamy, Online</strong> <br />
                    Focused on web development and JavaScript, covering key concepts such as interactive web pages, functions, DOM manipulation, and basic algorithms. Gained a foundational understanding of the elements in web programming. 
                </p>
            </div>
        </div>
    )
}

export default Resume