import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    //y tuong: mang ham nay qua ben context de fetch, xong qua day dung useEffect goi ham
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:1000/admin/login", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === null) {
            console.log(res.data);
          } else {
            localStorage.setItem("admin", true);
            return navigate("/admin");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-[#E1E8EE] h-screen flex items-center justify-center">
      <div className="w-80 h-96 bg-white rounded-2xl overflow-hidden flex items-center justify-center">
        <div>
          <h1 className="text-center font-semibold text-2xl mt-2 mb-6">
            Đăng nhập
          </h1>
          <form action="POST">
            <div className="">
              <label className="text-sm block cursor-text" htmlFor="email">
                Tài khoản
              </label>
              <input
                className="py-1 border-b-2 border-slate-500 outline-none focus:border-[#ff4081]"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                value={email}
                required
              />
            </div>
            <div className="mt-6">
              <label className="text-sm block cursor-text" htmlFor="password">
                Mật khẩu
              </label>
              <input
                className="py-1 border-b-2 border-slate-500 outline-none focus:border-[#ff4081]"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                value={password}
                required="required"
              />
            </div>
            {/* <input type="submit" onClick={handleSubmit} /> */}
            <div className="text-center">
              <button
                className="mt-5 py-2 px-6 mx-auto bg-[#ff4081] text-white"
                type="submit"
                onClick={handleSubmit}
              >
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
