import React from 'react'
import useThemeStore from '../store/useThemeStore'

const Settings = () => {

  const { darkMode, toggleTheme } = useThemeStore()

  return (
    <div>
      <h2>Settings</h2>
      <div>
        <label>
          <input type="checkbob" checked={darkMode} onChange={toggleTheme} />
          Dark Mode
        </label>
      </div>
    </div>
  )
}

export default Settings