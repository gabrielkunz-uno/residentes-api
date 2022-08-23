import { Route } from "react-router-dom"
import Companies from "../pages/Companies/HomeCompany"
import Map from '../pages/Map/Map'
import Report from '../pages/Reports/Report'
import Card from '../pages/Reports/CardReport'
import CreateReport from "../pages/Reports/CreateReport"
import Login from "../pages/Login/Login"
import IndexResident from "../pages/Residents/IndexResident"
import EditResident from "../pages/Residents/EditResident"


const routes = [
   {
      path: "companies",
      name: "companies",
      component: Companies,
      layout: "/user"
   },
   {
      path: "map",
      name: "map",
      component: Map,
      layout: "/user"
   },
   
   {
      path: "report",
      name: "report",
      component: Report,
      layout: "/user"
   },

   {
      path: "report/create",
      component: CreateReport
   },


   {
      path: "login",
      component: Login
   },

   {
      path: "residents/edit",
      component: EditResident
   }
   
]

// função que retorna o objeto com as rotas adicionadas acima
function getRoutes(routes) {
   return routes.map((prop, key) => {
      return (
         <Route
            path = { prop.path }
            name = { prop.name }
            element= {<prop.component />}
            key={key}
         />
      );
   });
};

const user_routes = getRoutes(routes)
export default user_routes