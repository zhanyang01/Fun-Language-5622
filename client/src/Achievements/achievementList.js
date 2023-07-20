import bookLogo from "../Images/book.png";
import fireLogo from "../Images/fireLogo.png";
import abcLogo from "../Images/abcLogo.png";
import apprenticeLogo from "../Images/apprenticeLogo.png";
import camaraLogo from "../Images/camara.png";
import tribute from "../Images/tribute.png"
import survivor from "../Images/survivor.png"
import master from "../Images/master.png"
import hero from "../Images/hero.png"

export const AchievementList = {
  achievements: [
    {
      title: "English Master",
      description: "You have completed all the assessments for English Language!",
      image: master,
    },
    {
      title: "English Hero",
      description: "You have completed the Advanced Assessment for English Language!",
      image: hero,
    },
    {
      title: "English Veteran",
      description: "You have completed the Intermediate Assessment for English Language!",
      image: survivor,
    },
    {
      title: "English Novice",
      description: "You have completed the Basic Assessment for English Language!",
      image: tribute,
    },
    {
      title: "English Finisher",
      description: "You have completed all the English levels!",
      image: bookLogo,
    },
    {
      title: "English Sage",
      description: "You have completed the English Advanced level!",
      image: fireLogo,
    },
    {
      title: "English Baby",
      description: "You have completed the English Basic level!",
      image: abcLogo,
    },
    {
      title: "English Apprentice",
      description: "You have completed the English Intermediate level!",
      image: apprenticeLogo,
    },
    {
      title: "Profile Picture Chosen",
      description: "You have chosen a profile picture!",
      image: camaraLogo,
    },
  ],
};
