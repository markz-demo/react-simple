import { Container } from 'common-ui'
import { Routes, Route, NavLink } from 'react-router-dom'
import Sub2 from './sub2'

export default function Router() {
    return (
        <div>
            <h2>Sub router</h2>
            <div className="mb-16">
                <NavLink to="">index</NavLink>
                <NavLink to="sub1" className="ml-16">sub1</NavLink>
                <NavLink to="sub2" className="ml-16">sub2</NavLink>
            </div>
            <div className="border p-16">
                <Routes>
                    <Route exact path="" element={<Index />} />
                    <Route exact path="sub1" element={<Sub1 />} />
                    <Route exact path="sub2" element={<Sub2 />} />
                </Routes>
            </div>
        </div>
    )
}

function Index() {
    return (
        <Container title="Sub index">
            TODO
        </Container>
    )
}

function Sub1() {
    return (
        <Container title="Sub1">
            TODO
        </Container>
    )
}