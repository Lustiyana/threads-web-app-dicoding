import AuthLayout from '../../components/layout/AuthLayout/AuthLayout'
import TextInput from '../../components/atoms/TextInput/TextInput'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form action="" className="p-8">
        <TextInput type="text" placeholder="Nama" />
        <TextInput type="text" placeholder="Email" />
        <TextInput type="password" placeholder="Password" />
        <button className="btn btn-primary w-full mt-8">Daftar</button>
        <p className="text-center">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-primary">
            Masuk disini
          </Link>
        </p>
      </form>
    </AuthLayout>
  )
}

export default RegisterPage