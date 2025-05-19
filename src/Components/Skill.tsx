import type { SkillType } from "../Types"

const Skill = ({ img, name }: SkillType) => {
    return (
        <div className="bg-violet-700/20 p-2 rounded-2xl Flex_Center gap-3 flex-col">
            <div className="font-bold">{name}</div>
            <div className="Flex_Center">
                <img src={img} alt={name} className="w-[85px] absolute" />
                <img src="/Images/sphere.png" alt="sphere" className="w-[120px]" />
            </div>
        </div>
    )
}

export default Skill