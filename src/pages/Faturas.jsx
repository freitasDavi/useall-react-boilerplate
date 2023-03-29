import { Link } from "react-router-dom";
import { Text } from "../components/Text";

function Faturas() {

	return (
		<main>
			<Text>Faturas</Text>
			<Link to="/">
				<a>Home</a>
			</Link>
		</main>
	);
}

export default Faturas;
