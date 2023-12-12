import { Link, useNavigate } from "react-router-dom";
import TextInput from "../../components/atoms/TextInput/TextInput";
import AuthLayout from "../../components/layout/AuthLayout/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { clearLogin, postLogin } from "../../redux/features/login/action";

const LoginPage = () => {
  const [modifiedData, setModifiedData] = useState({
    email: "",
    password: "",
  });
  const { data, error, loading } = useSelector((state) => state.login);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postLogin(modifiedData))
  }


  useEffect(()=>{
    if(data?.status=='success'){
      localStorage.setItem('token', data.data.token)
      dispatch(clearLogin())
      navigate('/')
    }
  }, [data?.status, navigate])

  return (
    <AuthLayout title="Login">
      <form action="" className="p-8" onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Email"
          value={modifiedData.email}
          onChange={(e) =>
            setModifiedData({ ...modifiedData, email: e.target.value })
          }
        />
        <TextInput
          type="password"
          placeholder="Password"
          value={modifiedData.password}
          onChange={(e) =>
            setModifiedData({ ...modifiedData, password: e.target.value })
          }
        />
        <button className="btn btn-primary w-full mt-8" type="submit" disabled={loading}>
        {loading?<span className="loading loading-spinner loading-md"></span>:<div>MASUK</div>}
        </button>
        <p className="text-center">
          Belum punya akun?{" "}
          <Link to="/register" className="text-primary">
            Daftar disini
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
