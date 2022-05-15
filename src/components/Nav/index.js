import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {tabs, currentTab, setCurrentTab} = props;

    return(
        <nav>
            <ul>                               
                {tabs.map((tab, i) => (
                    <li className={`${currentTab === tab && 'navActive'}`} href={`#${tab}`} key={2}>
                        <span data-testid={tab} onClick={() => {setCurrentTab(tab)}}> {capitalizeFirstLetter(tab)} </span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}


export default Nav;