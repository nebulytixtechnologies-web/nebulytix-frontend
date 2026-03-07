import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import toast from 'react-hot-toast'
import { login } from '../../redux/slices/authSlice'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isLoading, error } = useSelector((state) => state.auth)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!email || !password) {
            toast.error('Please fill in all fields')
            return
        }

        try {
            const result = await dispatch(login({ email, password })).unwrap()
            if (result) {
                toast.success('Login successful!')
                navigate('/admin')
            }
        } catch (error) {
            toast.error(error || 'Login failed')
        }
    }

    return (
        <>
            <Helmet>
                <title>Admin Login - Nebulytix Technologies</title>
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-100 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-md w-full"
                >
                    {/* Logo */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold">
                            <span className="text-primary-600">Nebulytix</span>
                            <span className="text-secondary-600"> Admin</span>
                        </h1>
                        <p className="text-secondary-600 mt-2">Sign in to access dashboard</p>
                    </div>

                    {/* Login Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="input-field"
                                    placeholder="admin@nebulytix.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="input-field"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>

                            {error && (
                                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'Signing in...' : 'Sign In'}
                            </button>
                        </form>

                        {/* Demo Credentials */}
                        <div className="mt-6 p-4 bg-secondary-50 rounded-lg">
                            <p className="text-sm text-secondary-600 font-medium mb-2">Demo Credentials:</p>
                            <p className="text-xs text-secondary-500">Email: admin@nebulytix.com</p>
                            <p className="text-xs text-secondary-500">Password: Admin@123</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Login