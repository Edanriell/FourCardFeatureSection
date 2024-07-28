import { FC } from "react";

export enum IconType {
	Homepage,
	Idea,
	Search,
	Software
}

type IconProps = {
	iconType: IconType;
};

export const Icon: FC<IconProps> = ({ iconType }) => {
	switch (iconType) {
		case IconType.Homepage:
		case IconType.Idea:
		case IconType.Search:
		case IconType.Software:
		default:
			return null;
	}
};
