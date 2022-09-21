import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", url: "https://www.linkedin.com/in/marcus-oliveira-3a4686195/", icon: <FaLinkedinIn /> },
  { name: "github", url: "https://github.com/formarcus", icon: <FaGithub /> },
  { name: "instagram", url: "#", icon: <FaInstagram /> },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.url} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
