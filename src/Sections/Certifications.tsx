import Certification from "../Components/Certification"
import HeadTitle from "../Components/HeadTitle"
import { CERTIFICATIONS } from "../Constants"

const Certifications = () => {
    return (
        <section id="certification" className="w-full flex flex-col">
            <HeadTitle head="My Certification" subHead="Freecodecamp" />
            <div className="Flex_Center w-full">
                <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
                    {
                        CERTIFICATIONS.map((certification, index) => (
                            <Certification key={index} {...certification} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Certifications