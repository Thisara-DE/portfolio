import React from "react";
// import coverPhoto from '../../assets/cover/cover.jpg'

function Header(props) {
    // const {tabs = [], setCurrentTab, currentTab} = props;
    return(
        <header>            
            <h2>
                <a href='/'>                    
                    Thisara Dhammika Eranga
                </a>
            </h2>
            <nav>
                <ul>
                    <li><a data-testid='about' href='#about'>
                            About me
                        </a></li>
                    <li>Contact</li>
                    {/* {tabs.map((tab) => (
                        <li key={tab.name}>{tab.name}</li>
                    ))} */}
                </ul>
            </nav>
            
        </header>
    )
}

export default Header