import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Request from "../../request"

import Table from './HomeTableCompany';

function IndexCompany(){
    const [companies, setCompanies]= useState(null);
    
    useEffect(() => {
            Request.getAll("companies")
            .then((companies) => setCompanies(companies))
            .catch((err) => console.log(`Error: ${err}`));
        }, []);
    
    return(
        <div>
            <Table companies={companies}/>
        </div>
    );
}

export default IndexCompany;