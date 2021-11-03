import { useState } from "react";
import axios from "axios";

const Register = () => {
	const [name, setName] = useState("Lawrence");
	const [email, setEmail] = useState("lawrence@gmail.com");
	const [password, setPassword] = useState("llllll");

	const handleSubmit = (e) => {
		e.preventDefault();
		//console.table({ name, email, password });
		const { data } = axios.post(`http://localhost:8000/api/register`, {
			name,
			email,
			password,
		});
		console.log("REGISTER RESPONSE", data);
	};

	return (
		<>
			<h1 className="jumbotron text-center bg-primary square">Register</h1>

			<div className="container col-md-4 offset-md-4 pb-5">
				<form onSubmit={handleSubmit}>
					<h4>Do not have an account?</h4>
					<p>Come register with us</p>

					<br />
					<input
						type="text"
						className="form-control mb-4 p-4"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="* Enter name"
						required
					/>

					<input
						type="email"
						className="form-control mb-4 p-4"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="* Enter email"
						required
					/>

					<input
						type="password"
						className="form-control mb-4 p-4"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="* Enter password"
						required
					/>
					<p>
						<strong>(*) as required fields</strong>
					</p>
					<p>
						You will receive a email notification as above provided. Confirm the
						account and <strong>LET'S GET STARTED!</strong>
					</p>

					<button type="submit" className="btn btn-block btn-primary">
						Submit
					</button>
				</form>
			</div>
		</>
	);
};

export default Register;
