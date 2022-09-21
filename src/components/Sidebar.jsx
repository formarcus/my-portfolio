import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";


import Avatar from "../img/perfil.jpeg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Matheus Battisti" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="curriculo.pdf" download='Marcus curriculo.pdf' className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
