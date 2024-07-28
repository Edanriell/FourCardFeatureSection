import { FC } from "react";

import { MainLayout } from "@widgets/layouts/main";

import { FeatureCard } from "@shared/ui/feature-card";

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
				<ul>
					<li>
						<FeatureCard
							title="Supervisor"
							description="Monitors activity to identify project roadblocks"
							cardColor="bg-[var(--medium-turquoise)]"
							Icon={Icon}
						/>
					</li>
				</ul>
			</section>
		</MainLayout>
	);
};

const Icon: FC = () => (
	<svg
		className="w-[5.7rem] h-[5.7rem] absolute bottom-[2.8rem] right-[2.8rem] desktop:w-[6.4rem] desktop:h-[6.4rem] desktop:bottom-[3.2rem] desktop:right-[3.2rem]"
		width="64"
		height="64"
		viewBox="0 0 64 64"
		shapeRendering="geometricPrecision"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M56.8418 7.15821C47.3159 -2.40478 31.9399 -2.36718 22.4141 7.15821C14.3887 15.1841 12.9634 27.5972 18.8887 37.1607L16.376 39.7105L15.02 45.855L19.2344 50.0693L24.3267 47.6611L26.8394 45.1108C36.4028 51.0366 48.8164 49.6489 56.8418 41.5859C66.4048 32.0601 66.3672 16.6841 56.8418 7.15821Z"
			fill="#676E74"
		/>
		<path
			d="M24.3267 47.6611L26.8394 45.1108C36.4028 51.0366 48.8159 49.6489 56.8418 41.5859C66.4048 32.0601 66.3672 16.6841 56.8418 7.1582L16.5825 47.4175L19.2339 50.0693L24.3267 47.6611Z"
			fill="#474F54"
		/>
		<path
			d="M54.2129 9.78711C50.4805 6.0542 45.3237 3.74561 39.6279 3.74561C28.2363 3.74561 19.0015 12.9805 19.0015 24.3721C19.0015 30.0679 21.3101 35.2246 25.0425 38.9575C28.7754 42.6899 33.9321 44.9985 39.6279 44.9985C51.0195 44.9985 60.2544 35.7637 60.2544 24.3721C60.2544 18.6763 57.9458 13.5195 54.2129 9.78711Z"
			fill="#64E1DC"
		/>
		<path
			d="M60.2544 24.3721C60.2544 18.6763 57.9458 13.5195 54.2129 9.78711L25.0425 38.9575C28.7754 42.6899 33.9321 44.9985 39.6279 44.9985C51.0195 44.9985 60.2544 35.7637 60.2544 24.3721Z"
			fill="#00C8C8"
		/>
		<path
			d="M56.2388 23.4106C56.0547 23.103 53.2588 18.4961 48.958 15.042C46.3276 12.9287 43.1357 11.2461 39.6279 11.2461C30.3857 11.2461 23.314 22.9146 23.0171 23.4106L22.4419 24.3721L23.0171 25.3335C23.2012 25.6416 25.9966 30.2485 30.2974 33.7026C32.9282 35.8154 36.1201 37.498 39.6279 37.498C48.8701 37.498 55.9419 25.8296 56.2388 25.3335L56.8135 24.3721L56.2388 23.4106Z"
			fill="#EFEFF4"
		/>
		<path
			d="M56.2388 25.3335L56.8135 24.3721L56.2388 23.4106C56.0547 23.103 53.2588 18.4961 48.958 15.042L30.2974 33.7026C32.9282 35.8154 36.1201 37.498 39.6279 37.498C48.8701 37.498 55.9419 25.8296 56.2388 25.3335Z"
			fill="#DADAE5"
		/>
		<path
			d="M43.604 20.3965C42.5854 19.3774 41.1787 18.7466 39.6279 18.7466C36.5259 18.7466 34.0024 21.27 34.0024 24.3721C34.0024 25.9233 34.6333 27.3296 35.6519 28.3481C36.6709 29.3667 38.0767 29.9976 39.6279 29.9976C42.73 29.9976 45.2534 27.4741 45.2534 24.3721C45.2534 22.8213 44.6226 21.415 43.604 20.3965Z"
			fill="#64E1DC"
		/>
		<path
			d="M45.2534 24.3721C45.2534 22.8213 44.6226 21.415 43.604 20.3965L35.6519 28.3481C36.6704 29.3667 38.0767 29.9976 39.6279 29.9976C42.73 29.9976 45.2534 27.4741 45.2534 24.3721Z"
			fill="#00C8C8"
		/>
		<path
			d="M40.9536 23.0464C40.6143 22.707 40.1455 22.4971 39.6279 22.4971C38.5933 22.4971 37.7529 23.3374 37.7529 24.3721C37.7529 24.8896 37.9629 25.3584 38.3022 25.6978C38.6416 26.0371 39.1104 26.2471 39.6279 26.2471C40.6626 26.2471 41.5029 25.4067 41.5029 24.3721C41.5029 23.855 41.293 23.3862 40.9536 23.0464Z"
			fill="#676E74"
		/>
		<path
			d="M41.5029 24.3721C41.5029 23.855 41.293 23.3862 40.9536 23.0464L38.3022 25.6978C38.6416 26.0371 39.1104 26.2471 39.6279 26.2471C40.6626 26.2471 41.5029 25.4067 41.5029 24.3721Z"
			fill="#474F54"
		/>
		<path
			d="M20.333 43.667L16.376 39.7104L0 56.0493L3.9751 60.0249L7.95068 64L24.3267 47.6611L20.333 43.667Z"
			fill="#575C60"
		/>
		<path
			d="M24.3267 47.6611L20.333 43.667L3.9751 60.0249L7.95068 64L24.3267 47.6611Z"
			fill="#333637"
		/>
	</svg>
);
