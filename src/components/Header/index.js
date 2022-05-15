import React from "react";
// import coverPhoto from '../../assets/cover/cover.jpg'

function Header(props) {
    const {tabs = []} = props;
    return(
        <header>            
            <h2 className="px-5 py-2">
                <a className=" flex-row py-2" href='/'>                    
                    Thisara Dhammika Eranga
                </a>
            </h2>
            <nav>
                <ul>
                    <li><a data-testid='about' href='#about'>
                            About me
                        </a></li>                    
                    {tabs.map((tab) => (
                        <li key={tab.name}>{tab.name}</li>
                    ))}
                </ul>
            </nav>
            
        </header>
    )
}

export default Header