import React from "react";
import "./Sidebar.scss";
import logoIMG from "../../../assets/images/logo.svg";
import Submenu from "./parts/Submenu";
import SidebarButton from "./parts/SidebarButton";
import {
	CalendarIcon,
	ChatIcon,
	ChevronRightIcon,
	FolderIcon,
	GraphIcon,
	SearchIcon,
	SettingsIcon,
	StatIcon,
	UserIcon,
} from "../../../theme/Icons";
import Infos from "./parts/Infos";

const Sidebar = () => {
	return (
		<div className="sidebar-main">
			<div className="top">
				<div className="logo">
					<img src={logoIMG} alt="Logo" />
					<h2>Dash</h2>
				</div>

				<div className="menu">
					<Submenu title="MAIN MENU">
						<SidebarButton Icon={StatIcon} title="Dashboard" />
						<SidebarButton
							Icon={ChatIcon}
							title="Inbox"
							notification={99}
						/>
					</Submenu>

					<Submenu title="Workspace">
						<SidebarButton Icon={UserIcon} title="Accounts" />
						<SidebarButton
							Icon={CalendarIcon}
							title="Schedule Post"
						/>
						<SidebarButton
							Icon={SearchIcon}
							title="Communities"
							notification={2}
						/>
						<SidebarButton Icon={GraphIcon} title="Analytics" />
					</Submenu>

					<Submenu title="General">
						<SidebarButton
							Icon={FolderIcon}
							title="File & Folders"
						/>
						<SidebarButton Icon={SettingsIcon} title="Settings" />
					</Submenu>
				</div>
			</div>

			<div className="bottom">
				<Infos />
			</div>

			<div className="buttonClose">
				<ChevronRightIcon fill="#445BFF" />
			</div>
		</div>
	);
};

export default Sidebar;
