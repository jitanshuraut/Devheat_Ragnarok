import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="firstSection" style={{ backgroundImage: "url(image.png)" }}>
        <div className="navBar">
          <div className="logo">
            <img src="Logo.svg" className="logo2" style={{ width: "200px" }} alt="Logo" />
          </div>
          <div className="menus">
            <ul>
              <Link to="/login" style={{ color: "white", textDecoration: "none" }}><li>Stocks</li></Link>
              <Link to="/login" style={{ color: "white", textDecoration: "none" }}><li>Predictor</li></Link>
              <Link to="/login" style={{ color: "white", textDecoration: "none" }}><li>Profile</li></Link>
              <Link to="/login" style={{ color: "white", textDecoration: "none" }}><li>Wallet</li></Link>
            </ul>
          </div>
          <div className="Sign up"><Link to="/login" className="button-43 btn6">Sign In</Link></div>
        </div>
        <div className="section">
          <div className="firstLeft">
            <div className="line">
              <div className="head1">Trading</div>
              <div className="head2">Platform</div>
            </div>
            <div className="head3">of the Future!</div>
            <div className="text">Always an informed investment decision. <br />
              First you prepare, then you go for it.</div>
            <div className="btn" id="btn2"><Link to="/login" className="button-43">Sign In</Link></div>
          </div>
          <div className="firstRight">
            <img className="firstImage" src="mobiletrade.png" alt="image" />
          </div>
        </div>
      </div>
      <div className="second">
        <div className="left2">
          <img src="computer2.jpg" alt="img" className="img3" />
        </div>
        <div className="right2">
          <div className="head1 head5">Becoming No #1 For <br /> Investment Needs</div>
          <div className="text text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna.</div>
          <div className="head1 head5 head6">Our Vision</div>
          <hr />
          <div className="text text2">Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</div>
          <div className="head1 head5 head6">Our Mission</div>
          <hr />
          <div className="text text2">Perspiciatis unde omnis iste natus error volupta accusantium.</div>
        </div>
      </div>
      <div className="third second">
        <div className="left2">
          <img src="men.jpg" alt="img" className="img3" />
        </div>
        <div className="right2">
          <div className="head1 head5">Find Stocks According <br /> To Your Criteria</div>
          <div className="text text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna.</div>
          <div className="f1">
            <img src="search.png" alt="Search" width="50px" className="icon" />
            <div className="info2">
              <div className="head1 head5 head6">Choose Your Stock</div>
              <div className="text text2">Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
              </div>
            </div>
          </div>
          <hr />
          <div className="f1">
            <img src="chart.png" alt="Search" width="50px" className="icon" />
            <div className="info2">
              <div className="head1 head5 head6">Detailed Comparison</div>
              <div className="text text2">Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
              </div>
            </div>
          </div>
          <hr />
          <div className="f1">
            <img src="wallet.png" alt="Search" width="50px" className="icon" />
            <div className="info2">
              <div className="head1 head5 head6">Buy Your Shares</div>
              <div className="text text2">Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
              </div>
            </div>
          </div>
          <hr />
          <div className="f1">
            <img src="selling.png" alt="Search" width="50px" className="icon" />
            <div className="info2">
              <div className="head1 head5 head6">Sell Anytime</div>
              <div className="text text2">Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="fourth second">
        <div className="left2">
          <img src="image7.png" alt="img" className="img3" />
        </div>
        <div className="right2">
          <div className="head1 head5">What is us?</div>
          <div className="text text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium expedita, eaque atque libero enim reiciendis repellendus at quas laudantium voluptatem deleniti sit molestias adipisci tenetur consequuntur minima nulla ullam iste!</div>
          <div className="Sign up"><Link to="/login" className="button-43 btn6 btn8" >Sign In</Link></div>
        </div>
      </div>
      <footer>
        <div className="foot" style={{ backgroundImage: "url(background5.png)" }}>
          <img src="Logo.svg" style={{ width: "200px" }} alt="" />
          <div className="menus" id="nav2">
            <ul id="nav3">
              <Link to="/login" style={{ color: "white", textDecoration: "none" }}><li>Stocks</li></Link>
              <Link to="/login" style={{ color: "white", textDecoration: "none" }}><li>Predictor</li></Link>
              <Link to="/login" style={{ color: "white", textDecoration: "none" }}><li>Profile</li></Link>
              <Link to="/login" style={{ color: "white", textDecoration: "none" }}><li>Wallet</li></Link>
            </ul>
          </div>
          <div className="social">
            <i className="fa fa-linkedin-square" style={{ fontSize: '36px', marginLeft: "10px" }} />
            <i className="fa fa-github" style={{ fontSize: '36px', marginLeft: "10px" }} />
          </div>
        </div>
      </footer>

    </>
  )
}

export default Home