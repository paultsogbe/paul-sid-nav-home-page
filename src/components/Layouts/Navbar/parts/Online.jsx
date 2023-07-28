import React from "react";
import "./Online.scss";
import profilIMG from "../../../../assets/images/profil2.jpg";

const Online = () => {
	return (
		<div className="navbar-online">
			<div className="status">
				<div className="round" />
				ONLINE
			</div>

			<div className="profils">
				<OnlineProfil photo={profilIMG} />
				<OnlineProfil photo={profilIMG} />
				<OnlineProfil photo={profilIMG} />
				<OnlineProfil photo={profilIMG} />
			</div>
		</div>
	);
};

export default Online;

const OnlineProfil = ({ photo }) => {
	return (
		<div className="profil">
			<img src={photo} alt="" />
		</div>
	);
};
