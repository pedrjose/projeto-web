import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
// import GerenciamentoProjetos from "views/Projetos/gerenciamentoProjetos.js";
// import GerenciamentoProfessores from "views/Professores/gerenciamentoProfessores.js";
import GerenciamentoAlunos from "views/Alunos/gerenciamentoAlunos.js";
import GerenciamentoAvaliacao from "views/Avaliacao/GerenciamentoAvaliacao.js";
import GerenciamentoComponenteCurricular from "views/ComponenteCurricular/GerenciamentoComponenteCurricular";
import GerenciamentoEndereco from "views/Enderecos/GerenciamentoEndereco";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";
import { EmojiEmotions, EmojiPeople, PersonOutline } from "@material-ui/icons";

const dashboardRoutes = [
  {
    path: "/alunos",
    name: "Gerenciamento de Alunos",
    rtlName: "Alunos",
    icon: Person,
    component: GerenciamentoAlunos,
    layout: "/admin",
  },
  {
    path: "/avaliacao",
    name: "Gerenciamento de Avaliação",
    rtlName: "Avaliações",
    icon: Person,
    component: GerenciamentoAvaliacao,
    layout: "/admin",
  },
  {
    path: "/componentes",
    name: "Gerenciamento de Componentes Curriculares",
    rtlName: "Componentes",
    icon: Person,
    component: GerenciamentoComponenteCurricular,
    layout: "/admin",
  },
  {
    path: "/enderecos",
    name: "Gerenciamento de Endereços",
    rtlName: "Endereços",
    icon: Person,
    component: GerenciamentoEndereco,
    layout: "/admin",
  },
];

export default dashboardRoutes;
