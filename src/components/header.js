import React from 'react'

function Header(props) {
    return (
        <nav className="pa3 pa4-ns">
            <div className="tc">
                {/*<a className="link dim gray f6 f5-ns dib mr3" href="#" title="Home">Home</a>*/}
                <a className="link dim gray f6 f5-ns dib mr3 fr" href="#" title="About" onClick={props.onShowAbout}>About</a>
            </div>
            <div className="black b f1 f-headline-ns db avenir">Artistiek DNA</div>
            <hr/>
        </nav>
    );
}

export default Header;