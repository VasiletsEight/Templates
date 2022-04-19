import React from "react"

interface Props{
    children:React.ReactNode
}

export const MainLayout = ({children}:Props)=>{
    return(
        <div>
            <header/>
            <main>
                {children}
            </main>
            <footer/>
        </div>
    )
}
