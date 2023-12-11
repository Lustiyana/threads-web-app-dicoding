import AuthLayout from "../../components/layout/AuthLayout/AuthLayout";
import TextInput from "../../components/atoms/TextInput/TextInput";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { postRegister } from "../../redux/features/register/action";
import Toast from "../../components/atoms/Toast/Toast";

const RegisterPage = () => {
  const [modifiedData, setModifiedData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { data, loading, error } = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(postRegister(modifiedData))
  }

  useEffect(()=>{
    if(data?.status==='success'){
      navigate('/login')
    }
  }, [data?.status, navigate])

  console.log(error)
  return (
    <AuthLayout title="Register">
      <form action="" className="p-8" onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Nama"
          value={modifiedData.name}
          onChange={(e) =>
            setModifiedData({ ...modifiedData, name: e.target.value })
          }
        />
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
          {loading?<span className="loading loading-spinner loading-md"></span>:<div>DAFTAR</div>}
        </button>
        <p className="text-center">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-primary">
            Masuk disini
          </Link>
        </p>
      </form>
      {error?.status=="fail"?<Toast error={true} message={error.message} />:null}
    </AuthLayout>
  );
};

export default RegisterPage;
