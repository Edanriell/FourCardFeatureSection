import { FC, ReactNode } from "react";

type MainLayoutProps = {
	children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return (
		<main>
			<h1>Test</h1>
			{children}
		</main>
	);
};
