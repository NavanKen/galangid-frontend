import { environment } from "@/config/environment"
// import { SesionExtended } from "@/types/Auth"
import axios from "axios"

const headers = {
  "Content-Type": "application/json",
}

const instance = axios.create({
  baseURL: environment.API_URL,
  headers,
  timeout: 60 * 1000,
})

// instance.interceptors.request.use(
//   async (requset) => {
//     const session: SesionExtended | null = await getSession()
//     if (session && session.accessToken) {
//       requset.headers.Authorization = `Bearer ${session.accessToken}`
//     }
//     return requset
//   },
//   (error) => {
//     Promise.reject(error)
//   }
// )

// instance.interceptors.response.use(
//   (response) => response,
//   (error) => Promise.reject(error)
// )

export default instance
