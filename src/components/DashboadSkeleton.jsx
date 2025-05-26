import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function DashboadSkeleton() {
    const [activeLink, setActiveLink] = useState('dashboard')



    return (
        <>
            <style>{`
                .active {
                    background-color: #000;
                    color: #fff;
                }
            `}</style>  
            <div style={{
            display: 'flex',
            justifyContent:'flex-start',
            flexDirection: 'row',
            width: '100%',
            height: '70vh',
            
        }}>
            <section style={{width: '20%', display: 'flex', flexDirection: 'column', backgroundColor: 'gray'}}>
                    <div className={activeLink === 'dashboard' ? 'active' : ''}><Link to="/dashboard">Dashboard</Link></div>
                    <div className={activeLink === 'messages' ? 'active' : ''}><Link to="/dashboard/messages">Messages</Link></div>
                    <div><Link to="/">Logout</Link></div>

            </section>
            <Outlet context={{activeLink: setActiveLink}} />
        </div>    
        </>

    )
}
