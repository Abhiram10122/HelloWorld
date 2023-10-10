import React from 'react'

const ThemeButton = ({dark, handleTheme, color}: any) => {
  return (
    <button
                    id="theme"
                    className={`p-2 rounded-md outline-none ${color}`}
                    onClick={handleTheme}
                >
                    {dark ? 
                        (<svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-6 h-6"
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                        id="light-mode"
                    >
                        <path d="M7 12c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5-5 2.2-5 5zm5-3c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm1-4V3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1zm6.1-.1c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.3.4-1 0-1.4zM21 11h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1zm-3.3 5.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-1.4-1.4zM11 19v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1s-1 .4-1 1zm-6.1.1c.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1.4 1.4c-.4.3-.4 1 0 1.4zM2 12c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1zm4.3-7.1c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.3.5.4.8.4s.5-.1.7-.3c.4-.4.4-1 0-1.4L6.3 4.9z"></path></svg>) :
                        (
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="w-6 h-6"
                                id="night-mode" 
                                fill="curretColor"
                                // x="0" y="0" 
                                version="1.1" 
                                viewBox="0 0 29 29" 
                                // xml:space="preserve"
                            >
                                <path d="M19.282 17.038c-4.15-.513-7.691-3.379-9.245-7.261a11.042 11.042 0 0 1-.748-5.355.5.5 0 0 0-.772-.468C5.09 6.156 2.905 10.121 3.261 14.573c.442 5.524 4.959 10.056 10.482 10.513 5.646.468 10.522-3.148 12.01-8.213.118-.402-.274-.774-.661-.614a11.43 11.43 0 0 1-5.81.779z"></path>
                            </svg>
                        )
                    }
                </button>
  )
}

export default ThemeButton