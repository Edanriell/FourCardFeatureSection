import { FC } from "react";

import { MainLayout } from "@widgets/layouts/main";

import { FeatureCard } from "@shared/ui/feature-card";
import { Icon, IconType } from "@shared/ui/icon";

const featureCardsData = [
	{
		title: "Supervisor",
		description: "Monitors activity to identify project roadblocks",
		cardColor: "bg-[var(--medium-turquoise)]",
		Icon: Icon({ iconType: IconType.Search })
	},
	{
		title: "Team Builder",
		description: "Scans our talent network to create the optimal team for your project",
		cardColor: "bg-[var(--khmer-curry)]",
		Icon: Icon({ iconType: IconType.Homepage })
	},
	{
		title: "Karma",
		description: "Regularly evaluates our talent to ensure quality",
		cardColor: "bg-[var(--butterscotch)]",
		Icon: Icon({ iconType: IconType.Idea })
	},
	{
		title: "Calculator",
		description: "Uses data from past projects to provide better delivery estimates",
		cardColor: "bg-[var(--feather-star)]",
		Icon: Icon({ iconType: IconType.Software })
	}
];

export const HomePage: FC = () => {
	return (
		<MainLayout>
			<section className="mt-[8.5rem] mb-[7.8rem] mx-[3.2rem] desktop:mx-[16.5rem] desktop:mt-[8rem] desktop:mb-[8rem]">
				<div className="mb-[7.6rem] max-w-[48rem] desktop:max-w-[54rem] desktop:mb-[6.4rem]">
					<h1 className="font-poppins font-extralight text-[2.4rem] tracking-[0.01em] text-[var(--voyager)] text-center leading-[140%] mb-[1.6rem] desktop:text-[3.6rem]">
						Reliable, efficient delivery
						<strong className="font-poppins font-semibold text-[2.4rem] tracking-[0.01em] text-[var(--voyager)] block text-center leading-[140%] desktop:text-[3.6rem]">
							Powered by Technology
						</strong>
					</h1>
					<p className="font-poppins font-normal text-[1.5rem] leading-[167%] tracking-[0.01em] text-center text-[var(--voyager)] opacity-50">
						Our Artificial Intelligence powered tools use millions of project data points to ensure
						that your project is successful
					</p>
				</div>
				<ul className="grid grid-cols-1 grid-rows-4 gap-y-[2.5rem]">
					{featureCardsData.map(({ title, description, cardColor, Icon }, index) => (
						<li key={index + "-" + title}>
							<FeatureCard
								title={title}
								description={description}
								cardColor={cardColor}
								Icon={Icon}
							/>
						</li>
					))}
				</ul>
			</section>
		</MainLayout>
	);
};
