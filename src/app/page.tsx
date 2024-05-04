import { HeroHighlightCustom } from "./components/Hero/hero-highlight-custom";
import { CardList, CardType } from "./containers/card-list";
import { NavbarMenu } from "./components/navbar";

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavbarMenu />
      <HeroHighlightCustom />
      <CardList title={"Work Experience"} cardType={CardType.workExperience} />
      <CardList title={"Projects"} cardType={CardType.projects} />
    </div>
  );
}
