import { Link } from "react-router-dom";
import { Text } from "../components/Text";

function Home() {

	return (
		<main>
			<Text>Boilerplate USE</Text>
			<Link to="/faturas">
				<a>Faturas</a>
			</Link>
		</main>
	);
}

export default Home;
