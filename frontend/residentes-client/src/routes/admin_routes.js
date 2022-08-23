import { Route } from "react-router-dom"
import IndexCompany from "../pages/Companies/IndexCompany"
import createcompany from "../pages/Companies/CreateCompany"
import ShowCompany from "../pages/Companies/ShowCompany";
import CreateCompany from "../pages/Companies/CreateCompany";
import EditCompany from "../pages/Companies/EditCompany";
import TableCompany from "../pages/Companies/TableCompany"
import Report from "../pages/Reports/Report"
import EditResident from "../pages/Residents/EditResident"
import IndexResident from "../pages/Residents/IndexResident"

const routes = [
      {
            path: "companies",
            name: "companies",
            component: IndexCompany,
            layout: "/admin"
      },
      {
            path: "residents",
            name: "residents",
            component: Resident,
            layout: "/admin"
      },
      {
            path: "reports",
            name: "reports",
            component: Report,
            layout: "/admin"
      },

      // rotas aux(sem o nome na Admin Sidebar)
      {
            path: "companies/show",
            component: ShowCompany,
            layout: "/admin"
      },
      {
            path: "companies/create",
            component: CreateCompany,
            layout: "/admin"
      },
      {
            path: "companies/show/edit",
            component: EditCompany,
            layout: "/admin"
      },

      {
            path: "residents",
            component: IndexResident
      },

      {
            path: "residents/edit",
            component: EditResident
      },

      {
            path: "report",
            component: Report
      },
]

// função que retorna o objeto com as rotas adicionadas acima
function getRoutes(routes) {
      return routes.map((prop, key) => {
            return (
                  <Route
                        path = { prop.path }
                        name = { prop.name }
                        element={<prop.component />}
                        key = { key }
                  />
            );
      });
};

const admin_routes = getRoutes(routes)
export default admin_routes