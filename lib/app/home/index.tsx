// import Markdown from "./body.md";
import { useAppHomeRedirect } from "./redirect";
import { AppHomeTry } from "./try";

export const AppHome = (): JSX.Element => {
	useAppHomeRedirect();
	return (
		<div>
			<AppHomeTry />
			{/* <Markdown /> */}
		</div>
	);
};
