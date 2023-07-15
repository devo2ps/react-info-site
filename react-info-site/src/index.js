
import ReactDOM from 'react-dom'
import React from 'react'
// ReactDOM.render(<p>Hi, my name is Bob!</p>, document.getElementById("root")
//ReactDOM.render(<ul><li>Thing 1</li><li>Thing 2</li></ul>, document.getElementById("root"))
// July 4 progress





//formal beginnings of info page july 8
const page = (
    <div>
        <img src="/logo.svg" width="40px" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>It's composable!</li>
            <li>It's declarative!</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

ReactDOM.render(page, document.getElementById("root"))


//just read about the history of react and facebooks continued role in its development 10 years ago. July 10 



/* made obsolete on july 8

const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

*/
//equivalent to the two lines below, july 8. React 18 changed some things I guess
//ReactDOM.createRoot(document.getElementById("root")).render(navbar)


//const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(navbar)


/* Made obsolete on July 7
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

function Extra() {
    return (
        <h1>Quick addition</h1>
    ) }

//just researched more about js/react syntax today july 6

ReactDOM.render(
<div>
        <Navbar />
        <Extra /> </div>,
    document.getElementById("root")
) */
