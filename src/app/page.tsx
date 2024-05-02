import { HeroHighlightCustom } from "./components/Hero/hero-highlight-custom";
import { CardHoverEffectCustom } from "./components/card-hover-effect-custom";
import { CardList, CardType } from "./containers/card-list";

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroHighlightCustom />
      <CardList title={"Work Experience"} cardType={CardType.workExperience} />
      <CardList title={"Projects"} cardType={CardType.projects} />
    </div>
  );
}
