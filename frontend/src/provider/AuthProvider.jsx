import { createContext, useEffect, useState } from 'react'
import useAxiosPublic from '../hooks/useAxiosPublic'

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const axiosPublic = useAxiosPublic();

  const createUser = async (email, password) => {
    setLoading(true)
    try {
      const userData = { email, password, method: 'register' }
      const response = await axiosPublic.post('/auth/register', userData)
      setUser(response.data.user)
      setLoading(false)
      return response.data
    } catch (error) {
      setLoading(false)
      throw error
    }
  }

  const signIn = async (email, password) => {
    setLoading(true)
    try {
      const userData = { email, password }
      const response = await axiosPublic.post('/auth/login', userData)
      setUser(response.data.user)
      setLoading(false)
      return response.data
    } catch (error) {
      setLoading(false)
      throw error
    }
  }

  const signInWithGoogle = async () => {
    setLoading(true)
    try {
      const response = await axiosPublic.post('/auth/google')
      setUser(response.data.user)
      setLoading(false)
      return response.data
    } catch (error) {
      setLoading(false)
      throw error
    }
  }

  const logOut = async () => {
    setLoading(true)
    setUser(null)
    setLoading(false)
    return Promise.resolve()
  }

  const updateUserProfile = (name, photo) => {
    if (user) {
      setUser({ ...user, displayName: name, photoURL: photo })
    }
    return Promise.resolve()
  }

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider