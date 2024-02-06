import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

function Plans() {
	return (
		<div className="plans-container">
			<div className="blur plans-blur-l"></div>
			<div className="blur plans-blur-r"></div>
			<div className="programs-header" style={{ gap: "2rem" }}>
				<span className="stroke-text">READY TO START</span>
				<span>YOUR JOURNEY</span>
				<span className="stroke-text">NOW WITH US</span>
			</div>

			<div className="plans">
				{plansData.map((plan, i) => (
					<div className="plan" key={i}>
						{plan.icon}
						<span>{plan.name}</span>
						<span>$ {plan.price}</span>
						<div className="features">
							{plan.features.map((feat, i) => (
								<div className="feature" key={i}>
									<img src={whiteTick} alt="" />
									<span key={i}>{feat}</span>
								</div>
							))}
						</div>
						<div>
							<span>See more benifits </span>
						</div>
						<button>Join now</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default Plans;
