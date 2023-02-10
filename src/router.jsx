import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Title1 } from 'common-ui'
import 'common-ui/less/index.less'
import 'common-ui/init'

const Home = ReactLazy(() => import(/* webpackChunkName: "home" */ './home'))
const Page1 = ReactLazy(() => import(/* webpackChunkName: "page1" */ './page1'))
const Page2 = ReactLazy(() => import(/* webpackChunkName: "page2" */ './page2'))
const SubRouter = ReactLazy(() => import(/* webpackChunkName: "sub" */ './sub/router'))

export default function RootRouter() {
    return (
        <BrowserRouter>
            <div className="mb-16">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/page1" className="ml-16">Page1</NavLink>
                <NavLink to="/page2" className="ml-16">Page2</NavLink>
                <NavLink to="/sub" className="ml-16">Sub router</NavLink>
            </div>
            <Title1 />
            <div className="border p-16">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/page1" element={<Page1 />} />
                    <Route exact path="/page2" element={<Page2 />} />
                    <Route path="/sub/*" element={<SubRouter />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

function ReactLazy(factory) {
    const Lazy = React.lazy(() => factory().catch(e => {
        if (e.code === 'CSS_CHUNK_LOAD_FAILED' || e.name == 'ChunkLoadError') {
            window.location.reload()
        }
        throw e
    }))
    return class HOC extends React.Component {
        render() {
            return (
                <React.Suspense fallback={<div>loading</div>}>
                    <Lazy {...this.props} />
                </React.Suspense>
            )
        }
    }
}
