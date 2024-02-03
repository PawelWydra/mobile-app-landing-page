import { FaRegLightbulb, FaUserTie } from "react-icons/fa6";
import { FaBolt, FaBalanceScale } from "react-icons/fa";

const CardsData = [
    {
      icon: (
        <FaBolt className="icon icon-strong size-14" aria-label="Powerful Icon" />
      ),
      title: "Powerful",
      description: "Send large files without any limitations",
    },
    {
      icon: (
        <FaRegLightbulb
          className="icon icon-blob size-14"
          aria-label="Smart Icon"
        />
      ),
      title: "Smart",
      description:
        "Get real-time notifications when someone shares a file with you",
    },
    {
      icon: (
        <FaBalanceScale
          className="icon icon-scale size-14"
          aria-label="Easy Scale Icon"
        />
      ),
      title: "Easy Scale",
      description: "Access app reviews and ratings from your trusted network",
    },
    {
      icon: (
        <FaUserTie
          className="icon icon-professional size-14"
          aria-label="Professional Icon"
        />
      ),
      title: "Professional",
      description:
        "Save time searching for apps with personalized recommendations",
    },
  ];

  export default CardsData;