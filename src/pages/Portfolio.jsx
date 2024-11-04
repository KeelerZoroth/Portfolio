import ProjectCard from "../components/ProjectCard";
import PartyPlannerImage from "../assets/images/Party-Planner-Landing-Page.png";
import READMEGeneratorImage from "../assets/images/Screenshot 2024-11-04 155047.png";
import EmployeeManagerImage from "../assets/images/Screenshot 2024-11-04 155811.png";

function Portfolio() {

    const styles = {
        mainDiv:{
            padding: "1px 8px",
            backgroundColor: "rgb(130 183 220)",
        },
        flexDiv:{
            margin: "5px 0px",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
        },
        hText:{
            fontFamily: 'sans-serif',
            textAlign: "center",
        },
    }

    const projectLists = [
        {
            title: "Party Planner",
            image: PartyPlannerImage,
            url: "https://angiethelibrarian.github.io/Party-Planner-Project1/",
        },
        {
            title: "README Generator",
            image: READMEGeneratorImage,
            url: "https://github.com/KeelerZoroth/README-Generator/",
        },
        {
            title: "Employee Manager",
            image: EmployeeManagerImage,
            url: "https://github.com/KeelerZoroth/Employee-Manager/",
        }
    ]


    return (
        <div style={styles.mainDiv}>    
            <h1 style={styles.hText}>Portfolio</h1>
            <hr />
            <div style={styles.flexDiv}>
                {projectLists.map((projectData, index) => {
                    return  <ProjectCard  title={projectData.title} image={projectData.image} url={projectData.url} key={index}/>
                })}
            </div>
        </div>
    )
}

export default Portfolio