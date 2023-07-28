import React from "react";
import "./ScheduleDetail.scss";

const ScheduleDetail = ({ schedule, last = false }) => {
	return (
		<div
			className="schedule-detail"
			style={{
				borderBottom: last && "unset",
				paddingBottom: last && "unset",
			}}
		>
			<div className="infos">
				<div className="date">
					<h3>{schedule.month}</h3>
					<h2>{schedule.day}</h2>
				</div>
				<div className="texts">
					<h2>{schedule.name}</h2>
					<h3>{schedule.category}</h3>
				</div>
			</div>

			<div className="progression">
                <div className="bar">
					{/* cet style permet de faire une bare de progression dynamyque */}
                    <div className="bar-progress" style={{width:schedule.completition + "%"}}></div>
                </div>

                <p>{schedule.completition}% Complete</p>

            </div>
		</div>
	);
};

export default ScheduleDetail;
