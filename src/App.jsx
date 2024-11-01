
import './App.css'

import { HomePage } from './Page/HomePage/HomePage'
import { Level } from './components/Level/Level'


import { Routes, Route } from 'react-router-dom'
import { UpgradeShopPage } from './Page/UpgradeShopPage/UpgradeShopPage'
import { IncomeCount } from './components/IncomeCount/IncomeCount'

function App() {

    return (
        <>
            <div className="app">
                <Level/>
                <IncomeCount/>               
                <Routes>
                    {/* <Route element={<HomePage/>} path='/'/> */}
                    <Route element={<UpgradeShopPage/>} path='/'/>
                </Routes>
            </div>
        </>
    )
}

export default App
