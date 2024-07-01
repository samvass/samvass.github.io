import { CardHoverEffectCustom } from "../components/card-hover-effect-custom";
import { CardHoverEffectEducation } from "../components/card-hover-education";
import { workExperience, projects, education } from "@/app/info.json"

export enum CardType{
    workExperience,
    projects,
    education
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
        <div>
            <div className="px-4 text-4xl font-bold text-neutral-700 max-w-4xl leading-relaxed leading-snug text-center mx-auto mt-6">
                <span style={textGradient}>{title}</span>
            </div>
            { cardType === CardType.workExperience && 
            <CardHoverEffectCustom items={workExperience} />
            }
            { cardType === CardType.projects && 
            <CardHoverEffectCustom items={projects} />
            }
            { cardType === CardType.education && 
            <CardHoverEffectEducation items={education} />
            }
        </div>
    );
}
 
