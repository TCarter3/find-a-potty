import React from "react";
import { Link, } from "react-router-dom";

const NoMatch = () => (
    <>
    <h1 textAlign="center">Error: 404. Page Not Found</h1>
    <h2>Go on back <Link to="/">HOME</Link></h2>
    </>
    
);

export default NoMatch;