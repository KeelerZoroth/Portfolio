import { Link } from "react-router-dom";

function Nav() {

    const styles = {
        nav:{
            margin: "5px",
            padding: "5px",
        },
        ul:{
            listStyle: "none",
            margin: "0px",
            padding: "0px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "Center",
        },
        li:{
            margin: "5px",
            padding: "3px",
            border: "solid rgba(100, 100, 255, 0.5) 1px",
            backgroundColor: "rgba(100, 100, 255, 0.3)",
            display: "flex",
            justifyContent: "center",
        },
        Link:{
            width: "100%",
            maxWidth: "100px",
            textDecoration: "none",
            color: "white",
            textAlign: "center",
            position: "relative"
        }
    }

    const linkContext = [
        {
            text: "About Me",
            url: "/"
        },
        {
            text: "Portfolio",
            url: "/Portfolio"
        },
        {
            text: "Contact",
            url: "/Contact"
        },
        {
            text: "Resume",
            url: "/Resume"
        },
    ];

    return (
        <nav style={styles.nav}>
            <ul style={styles.ul}>
                {linkContext.map((context, index) => {
                    return (
                        <Link to={context.url} style={styles.Link} key={index}>
                            <div className="Crn-Container">
                                <div className="Link-TL-Crn"/>
                                <div className="Link-TR-Crn"/>
                                <div className="Link-BL-Crn"/>
                                <div className="Link-BR-Crn"/>
                            </div>
                            
                            <li style={styles.li}>
                                {context.text}
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </nav>
    )
};

export default Nav