import { Link } from "react-router-dom";
import TextInput from "../../components/atoms/TextInput/TextInput";
import AuthLayout from "../../components/layout/AuthLayout/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form action="" className="p-8">
        <TextInput type="text" placeholder="Email" />
        <TextInput type="password" placeholder="Password" />
        <button className="btn btn-primary w-full mt-8">Masuk</button>
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
