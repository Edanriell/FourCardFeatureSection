import { FC, ReactNode } from "react";

type FeatureCardProps = {
	title: string;
	description: string;
	cardColor: string;
	Icon: ReactNode;
};

export const FeatureCard: FC<FeatureCardProps> = ({ title, description, cardColor, Icon }) => {
	return (
		<article className="overflow-hidden relative rounded-[0.8rem] bg-[var(--wihte)] shadow-featureCard px-[2.8rem] pt-[2.7rem] pb-[11.8rem] desktop:px-[3.2rem] desktop:pt-[3.2rem] desktop:pb-[13.6rem] desktop:max-w-[35rem]">
			<div
				className={
					"absolute top-0 left-0 w-full h-[0.3rem] shadow-featureCard desktop:h-[0.4rem] " +
					cardColor
				}
			></div>
			<h2 className="font-poppins font-semibold text-[2rem] text-[var(--voyager)] text-left mb-[0.1rem] desktop:mb-[0.6rem]">
				{title}
			</h2>
			<p className="font-poppins font-normal text-[1.3rem] leading-[177%] tracking-[0.01em] text-[var(--voyager)] opacity-50 text-left">
				{description}
			</p>
			{Icon}
		</article>
	);
};
