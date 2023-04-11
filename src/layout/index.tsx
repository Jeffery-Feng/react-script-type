import { Fragment, Suspense } from "react"
// import { Route, Routes,Navigate, useSearchParams,useLocation } from 'react-router-dom'
import { Route, Routes,Navigate } from 'react-router-dom'
import routes from "../router"

function Layout () {
    return (
        <Fragment>
            <Routes>
            {
              routes.map((item, i) => {
                return (
                    <Route key={i} path={item.path} element={
                      <Suspense >
                        {
                          item.path === '/'? <Navigate to={item.redirect === undefined ? '': item.redirect } /> : < item.component />
                        }
                      </Suspense>
                    } />
                  
                )
              })
            }
        </Routes>
        </Fragment>
    )
}

export default Layout 