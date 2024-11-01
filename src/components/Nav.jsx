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
            width: "100%",
            maxWidth: "100px",
            margin: "5px",
            padding: "3px",
            border: "solid rgba(100, 100, 255, 0.5) 1px",
            backgroundColor: "rgba(100, 100, 255, 0.3)",
            display: "flex",
            justifyContent: "center",
        },
        Link:{
            textDecoration: "none",
            color: "white",
            textAlign: "center",
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
                        <li style={styles.li} key={index}>
                            <Link to={context.url} style={styles.Link}>{context.text}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
};

export default Nav