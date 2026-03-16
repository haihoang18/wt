"use client";

import "./main.css";
import { auth } from "./lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogin = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        <b>Letter Dance</b>
      </h1>
      <div className="login-box">
        <div className="header">
          <h2>Đăng nhập hệ thống</h2>
        </div>
        <div className="content">
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <br />
            <br />
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Nhập mật khẩu"
              required
            />
            <br />
            <br />
            <button type="submit">Đăng nhập</button>
            <br />
            <br />
            <label htmlFor="remember-password">
              <input
                type="checkbox"
                id="remember-password"
                name="remember-password"
                defaultChecked
              />
              Nhớ mật khẩu
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}
