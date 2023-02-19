import React from 'react'
import "./Login.css"
import {useState,useEffect} from "react"
import {ethers} from "ethers";
import ContratAbi from "./Login.json"
function Login() {
    const[currentName,setName]=useState("");
    const[currentAge,setAge]=useState(0);
    const[currentAddress,setAddress]=useState("");
    const[currentPanNumber,setPanNumber]=useState("");
    const [currentAdharNumber,setAdharNumber]=useState("");
    const [currentAccount, setAccount] = useState("");
    const contractAddress="0xA9f604D81ceeC869f301911945BC9B224E3894CF";
    useEffect(() => {
        WalletConnectedorNot();
      }, [])
    
      const WalletConnectedorNot = async () => {
        const { ethereum } = window;
        try {
          if (!ethereum) {
            alert("Please Authorize Whether That To View These Website You Must Have Crypto Wallet Installed")
          }
          else {
        
            let chainid = await ethereum.request({ method: "eth_chainId" });
          let GoerliChainid = '0x5';
          let PolygonChainId='0x137'
          if (chainid !== GoerliChainid ) {
             alert("Please Use Goerli Network or Polgon Only Others Has Deprication Issue")
            return;
          }
            const accounts = await ethereum.request({ method: "eth_accounts" });
            if (accounts.length != 0) {
              const currentacc = accounts[0];
              setAccount(currentacc);
             
              console.log("Present Connected Account:", currentacc)
            }
          }
        }
        catch (err) {
          console.log(err)
        }
      }


      const register=async()=>
      {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, ContratAbi.abi, signer);
        const txn=await contract.register(currentName,currentAge,currentAddress,currentAdharNumber,currentPanNumber);
        await txn.wait();
        alert("SuccesFully registered");
      }

   
  
  return (
   
    
    <div>
         <nav class="bg-dark navbar-dark navbar">
            <div className="row col-12 d-flex justify-content-center text-white">
                <h3 className='header'>Registration</h3>
            </div>
        </nav>

        <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName"> Name </label>
                  <input className="form__input"  onChange={e => setName(e.target.value)} type="text" id="Name" placeholder="Name"/>
              </div>
              <div className="age">
                  <label className="form__label" for="age">Age </label>
                  <input  type="text" name="" id="age" onChange={e => setAge(e.target.value)}  className="form__input"placeholder="Age"/>
              </div>
              <div className="Address">
                  <label className="form__label" for="email">Address </label>
                  <input  type="text" id="address"onChange={e => setAddress(e.target.value)} className="form__input" placeholder="Address"/>
              </div>
              <div className="pannumber">
                  <label className="form__label" for="pannumber">Pan Number </label>
                  <input className="form__input" onChange={e => setPanNumber(e.target.value)} type="text"  id="pannumber" placeholder="Pan Number"/>
              </div>
              <div className="adharumber">
                  <label className="form__label" for="adhatnumber">Adhar Number </label>
                  <input className="form__input" onChange={e => setAdharNumber(e.target.value)} type="text"  id="adarnumber" placeholder="Adhar  Number"/>
              </div>

          </div>
          <div class="footer">
              <button type="submit"  onClick={register } class="loginbtn">Register</button>
          </div>
      </div>      
    </div>
  )
}

export default Login