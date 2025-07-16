import ProjectCard from "../components/ProjectCard";
import GroupCalenderImage from "../assets/images/GroupCalenderImage.png"
import PartyPlannerImage from "../assets/images/Party-Planner-Landing-Page.png";
import READMEGeneratorImage from "../assets/images/Screenshot 2024-11-04 155047.png";
import SnippetImage from "../assets/images/Screenshot 2025-02-23 204013.png"
import TicTacToeImage from "../assets/images/Screenshot 2025-07-10 023202.png"

import portfolioBackgroundImage from "../assets/images/portfolio_background.jpg";

function Portfolio() {

    const styles = {
        mainDiv:{
            minHeight: "75vh",
            padding: "2px 8px",
            backgroundColor: "rgb(130 183 220)",
            background: `linear-gradient(rgba(130, 183, 220, 0.65), rgb(130, 183, 220, 0.65)), url(${portfolioBackgroundImage})`,
        },
        flexDiv:{
            margin: "5px 0px",
            display: "grid",
            gap: "10px",
            justifyContent: "space-evenly",
            gridTemplateColumns: "repeat(auto-fill, 306px)"
        },
        hText:{
            fontFamily: 'sans-serif',
            textAlign: "center",
        },
    }

    const projectLists = [
        {
            title: "Tic-Tac-Toe",
            image: TicTacToeImage,
            url: "https://tic-tac-toe-site-sx1e.vercel.app/",
        },
        {
            title: "Snippet",
            image: SnippetImage,
            url: "https://snippet-vzjo.onrender.com/",
        },
        {
            title: "Group Calender",
            image: GroupCalenderImage,
            url: "https://group-calendar-a5hu.onrender.com/",
        },
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