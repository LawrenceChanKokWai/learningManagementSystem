import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";

const Register = () => {
	const [name, setName] = useState("Lawrence");
	const [email, setEmail] = useState("lawrence@gmail.com");
	const [password, setPassword] = useState("llllll");
	const [loading, setLoading] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		//console.table({ name, email, password });
		try {
			setLoading(true);
			const { data } = axios.post(`/api/register`, {
				name,
				email,
				password,
			});
			toast("Registration successful. You are able to login.");
			setLoading(false);
		} catch (err) {
			toast(err.response.data);
			setLoading(false);
		}
		//console.log("REGISTER RESPONSE", data);
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

					<button
						type="submit"
						className="btn btn-block btn-primary"
						disabled={!name || !email || !password || loading}
					>
						{loading ? <SyncOutlined spin /> : "Submit"}
					</button>
				</form>

				<p className="text-center p-3">
					Already registered?{" "}
					<Link href="/login">
						<a>Login</a>
					</Link>
				</p>
			</div>
		</>
	);
};

export default Register;
