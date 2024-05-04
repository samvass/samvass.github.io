import { CardHoverEffectCustom } from "../components/card-hover-effect-custom";
import { workExperience, projects } from "@/app/info.json"

export enum CardType{
    workExperience,
    projects
}

interface CardListProps {
    title: string
    cardType: CardType
}

const textGradient = {
    backgroundImage: "linear-gradient(to right, #667eea, #764ba2)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    backgroundClip: "text"
  };


export const CardList = ({title, cardType}: CardListProps) => {

    return (
        <div className="scroll-mt-20 transition duration-500">
            <div className="px-4 lg:text-4xl font-bold text-neutral-700 max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto mt-6">
                <span style={textGradient}>{title}</span>
            </div>
            { cardType === CardType.workExperience && 
            <CardHoverEffectCustom items={workExperience} />
            }
            { cardType === CardType.projects && 
            <CardHoverEffectCustom items={projects} />
            }
        </div>
    );
}
 
