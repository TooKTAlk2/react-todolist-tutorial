import { createContext, useState, useContext, useEffect } from 'react'

export const DarkModeContext = createContext()

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setDarkMode((mode) => !mode)
    updateDarkMode(!darkMode)
  }
  useEffect(() => {
    // localStorage에서 불러오고 나서
    //
    // dark이면 true
    // 키값이 없으면 window에서 선호하는 color scheme을 가져옴
    const savedDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    setDarkMode(savedDark)
    updateDarkMode(savedDark)
  }, [])

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

// 자식 컴포넌트에게 Context 노출 없이 사용할 수 있도록 Hook을 만들어서 export
export const useDarkMode = () => useContext(DarkModeContext)

function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  }
}
