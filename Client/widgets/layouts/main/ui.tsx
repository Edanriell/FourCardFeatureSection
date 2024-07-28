import { FC, ReactNode } from "react";

type MainLayoutProps = {
	children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return (
		<main className={"w-full min-h-[100vh] flex flex-col items-center bg-[var(--dr-white)]"}>
			{children}
		</main>
	);
};
