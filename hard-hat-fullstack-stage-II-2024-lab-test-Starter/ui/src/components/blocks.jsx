import React, { useState } from "react"
import AddressSelector from "./addressSelector";
import Header from './header';
import BlockDetails from "./blockDetails";
import WidgetsIcon from '@mui/icons-material/Widgets';

function Blocks() {


    // mock ethereum address ===> move and fetch from backend api
    const ethereumAddresses = [`mock address 1`, `mock address 2`, `mock address 3`]
    
    // mock block details ===> fetch from backend api
    let selectedBlock;

    // useEffect hook ===>
    // fetch the data from the backend API
    // set (useState) the Data to state to rerender 

   const handleOnChange = (address) => {
        alert(`fetch block details with address ${address}`)
        // fetch block details ==> backend and re-render with selected block
        
   }

    return(
       <>
            <Header 
                title="Blocks" 
                headerSize="h5" 
                icon={WidgetsIcon}
                />
            <AddressSelector 
                InputLabel="Ethereum Block" 
                LabelId="ethereum-block-select-label" 
                handleAction={ handleOnChange }
                addresses={ethereumAddresses}
                />
           
            <div class="container">
                <BlockDetails {...selectedBlock} />
            </div>
       </>
    )

}

export default Blocks;