import React from "react";
import './../css/Wallet.css'

function Wallet(){
    const wallets = <div className="dropdown-right-item"><h4>$1500</h4></div>
 
    return(
      <div className="dropdownWallet">
        <div className="dropdown-wallet-left hidden">
    
        </div>
        <div className="dropdown-wallet-center hidden">
        <div className="dropdown-center-itemleft"></div>
        <div className="dropdown-center-itemright"></div>
        </div>
        <div className="dropdown-wallet-right">
        {wallets}
        <div className="divs-30 hidden"></div>
        <div className="divs-30 hidden"></div>
        <div className="divs-30 hidden"></div>
      </div>
      </div>
        
 );
}

export default Wallet