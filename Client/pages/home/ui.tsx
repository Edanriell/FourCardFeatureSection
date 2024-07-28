import { FC } from "react";

import { MainLayout } from "@widgets/layouts/main";

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
				<ul></ul>
			</section>
		</MainLayout>
	);
};
