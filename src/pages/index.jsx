import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './home'
import LandingPage from './home/landing'
import Layout from './layout';
import Contact from './contact';
import Properties from './properties';
import Prop_Details from './propertydetails';

const rootRoutes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            <Route path='/' element={<Home />}>
                <Route index  element={<LandingPage />}/>
                <Route path='contact' element={<Contact />}/>
                <Route path='properties' element={<Properties />}/>
                <Route path='property_details' element={<Prop_Details />}/>
            </Route>
        </Route>
    )
);

export default rootRoutes;