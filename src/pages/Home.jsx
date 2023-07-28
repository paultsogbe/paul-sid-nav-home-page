import React from "react";
import "./Home.scss";
import Schedule from "../components/Schedule/Schedule";
import TopChannel from "../components/TopChannel/TopChannel";

const Home = () => {
	return (
		<div className="home-page">
			<div className="left">

				<div className="title">
					<h1>Dashboard</h1>
					<h2>Welcome back, Erza Miller!</h2>
				</div>

				<Schedule style={{marginTop: "21px"}} />
				<TopChannel style={{marginTop: "33px"}} />

			</div>


			<div className="right"></div>
		</div>
	);
};

export default Home;

// cette partie permet de mettre en place html avant de codé
{/* <div className="home-page">

  <div className="left"></div>

  <div className="right"></div>

</div> */}
