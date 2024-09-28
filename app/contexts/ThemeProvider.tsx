import React, { createContext, useContext, useState, ReactNode } from "react"

const ThemeContext = createContext<{ theme: "light" | "dark"; toggleTheme: () => void }>({
  theme: "light",
  toggleTheme: () => {
    console.warn("toggleTheme function is not implemented yet.")
  },
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
