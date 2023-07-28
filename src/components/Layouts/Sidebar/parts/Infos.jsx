import React from "react";
import "./Infos.scss";

const Infos = () => {
	return (
		<div className="sidebar-info">
			<div className="icon">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 28 28"
				>
					<path
						fill="#017EFA"
						d="M14 .67A13.35 13.35 0 0 0 .67 14c0 7.35 5.98 13.33 13.33 13.33S27.33 21.35 27.33 14 21.35.67 14 .67ZM15.33 22h-2.66v-2.67h2.66V22Zm1.3-6.51c-.26.2-.5.4-.7.6a1.83 1.83 0 0 0-.6 1.07v.17h-2.66v-.22c0-.16.04-1.57 1.36-2.9.26-.26.59-.52.93-.8.97-.79 1.62-1.37 1.62-2.17a2.58 2.58 0 0 0-5.16 0H8.75a5.25 5.25 0 0 1 10.5 0c0 2.13-1.58 3.4-2.62 4.25Z"
					/>
				</svg>
			</div>

			<p>
				Need Help with <strong>Dash</strong>?
			</p>

			<button>Go to help center</button>
		</div>
	);
};

export default Infos;
