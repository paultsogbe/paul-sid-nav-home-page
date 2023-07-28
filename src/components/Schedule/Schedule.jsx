import React from "react";
import Widget from "../Widget/Widget";
import ScheduleDetail from "./parts/ScheduleDetail";
import "./Schedule.scss";

const Schedule = ({ ...rest }) => {
	const schedules = [
		{
			month: "Jul",
			day: 18,
			name: "Write 5 microblog articles on Instagram",
			category: "Office / Marketing",
			completition: 72,
		},
		{
			month: "May",
			day: 1,
			name: "Publish 20 post on Dribbbles",
			category: "Office / Marketing",
			completition: 90,
		},
		{
			month: "Jul",
			day: 18,
			name: "Drafting Material for Travel Campaign",
			category: "Drafting",
			completition: 20,
		},
	];

	return (
		                                  // ...rest passer des props sur ts les enfants de widget  
		<Widget title="Schedule Content" {...rest}> 
			<div className="schedules">
				{schedules.map((schedule, index) => (
					<ScheduleDetail  //map sur tous les detaills
						key={index}
						schedule={schedule}
						last={index === schedules.length - 1}
					/>
				))}
			</div>
		</Widget> // c'est comme un bouton (schedule content see Detail)
	);
};

export default Schedule;
