import React from 'react'

function Wallet() {
  return (
    <>
    <div className="firstSection">
        <div className="navBar">
            <div className="logo">
                <img src="Logo.svg"  style={{width:"200px"}} className="logo2" alt="Logo"/>
            </div>
            <div className="menus">
                <ul>
                    <li>Stocks</li>
                    <li>Predictor</li>
                    <li>Profile</li>
                    <li>Wallet</li>
                </ul>
            </div>
            <div className="Sign up"><i class="fa fa-user-circle" style={{fontSize:"36px"}}></i>
            </div>
        </div>
    </div>

    <div className="head33">
        <div className="head3 head7 head21"><b>Hello, </b> {sessionStorage.getItem("name")}</div>
        <button className="button-43 btn10" role="button">Withdraw  </button>
    </div>
    <div className="first5 f67">
        <div className="pic">
            <img src="Card.png" alt="" className="img35" style={{width:"390px"}}/>
        </div>
        <div className="right11">
            <div className="as as66">
                <p className="fhead f22">Available Balance</p>
                <div className="fname head3 head11"> ₹ 10856.56</div>
                <button className="button-43 btn9" role="button">Add Money</button>
            </div>
        </div>
    </div>


    <div className="head3 head7 head21">Stocks</div>
    <div className="stocks">
        <img src="NSE.webp" alt="" style={{width:"70px"}} className="simg"/>
        <div className="sname">NIFTY 50</div>
        <div className="sprice">₹ 2560</div>
        <div className="profit">+5.3%</div>
    </div>
    <div className="stocks">
        <img src="NSE.webp" alt="" style={{width:"70px"}} className="simg"/>
        <div className="sname">NIFTY 50</div>
        <div className="sprice">₹ 2560</div>
        <div className="profit">+5.3%</div>
    </div>
    <div className="stocks">
        <img src="NSE.webp" alt="" style={{width:"70px"}} className="simg"/>
        <div className="sname">NIFTY 50</div>
        <div className="sprice">₹ 2560</div>
        <div className="profit">+5.3%</div>
    </div>

    

    <div className="head3 head7 head21">Stocks</div>
    <div className="stocks">
        <img src="NSE.webp" alt="" style={{width:"70px"}} className="simg"/>
        <div className="sname">NIFTY 50</div>
        <div className="sprice">₹ 2560</div>
        <div className="profit">+5.3%</div>
    </div>
    <div className="stocks">
        <img src="NSE.webp" alt="" style={{width:"70px"}} className="simg"/>
        <div className="sname">NIFTY 50</div>
        <div className="sprice">₹ 2560</div>
        <div className="profit">+5.3%</div>
    </div>
    <div className="stocks">
        <img src="NSE.webp" alt="" style={{width:"70px"}} className="simg"/>
        <div className="sname">NIFTY 50</div>
        <div className="sprice">₹ 2560</div>
        <div className="profit">+5.3%</div>
    </div>


    <footer>
        <div className="foot" style={{ backgroundImage: "url(background5.png)" }}>
          <img src="Logo.svg" alt="" style={{width:"200px"}} />
          <div className="menus" id="nav2">
            <ul id="nav3">
              <li>Stocks</li>
              <li>Predictor</li>
              <li>Profile</li>
              <li>About us</li>
            </ul>
          </div>
          <div className="social">
            <i className="fa fa-linkedin-square" style={{ fontSize: '36px' }} />
            <i className="fa fa-github" style={{ fontSize: '36px' }} />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Wallet