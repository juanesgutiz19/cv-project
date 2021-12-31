import React from 'react'

const OptionComponent = ( { isSmallSize = false, optionName } ) => {

    let block = isSmallSize ? 'block' : '';
    let styleOption = `text-gray-100 hover:bg-gray-700 hover:text-white ${block} px-3 py-2 rounded-md text-base font-normal`;

    let sectionName = optionName.toLowerCase();
    let sectionHref = `/#${sectionName}`;
    return (
        <a
            href={ sectionHref }
            // className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
            className= { styleOption }
        >
            { optionName }
        </a>
    )
}

export default OptionComponent;
