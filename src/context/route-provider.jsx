import { createContext, useContext, useState } from "react"

const initialState = {
  route: "#",
  setRoute: () => null,
}

const RouteProviderContext = createContext(initialState)

export function RouteProvider({
  children,
  defaultRoute = "#",
  storageKey = "vite-ui-route",
  ...props
}) {
  const [route, setRoute] = useState(
    () => (localStorage.getItem(storageKey)) || defaultRoute
  )

  const value = {
    route,
    setRoute: (route) => {
      localStorage.setItem(storageKey, route)
      setRoute(route)
    },
  }

  return (
    <RouteProviderContext.Provider {...props} value={value}>
      {children}
    </RouteProviderContext.Provider>
  )
}

export const useRoute = () => {
  const context = useContext(RouteProviderContext)

  if (context === undefined)
    throw new Error("useRoute must be used within a RouteProvider")

  return context
}