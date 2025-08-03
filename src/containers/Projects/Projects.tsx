import { DotButton, useDotButton } from '@/components/Embla/js/EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from '@/components/Embla/js/EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Project from '@/components/Project/Projet'
import tripShareImage from '@/assets/images/trip-share.webp'
import survivalGameImage from '@/assets/images/survival-react.webp'
import pcAgencyImage from '@/assets/images/pc-agency.webp'


function Projects () {

    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true})

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className='projects'>
            <h2>Mes projets</h2>
            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className='embla__container'>
                        <Project index={0} name='Trip-share' image={tripShareImage} selectedIndex={selectedIndex}/>
                        <Project index={1} name='Survival-game' image={survivalGameImage} selectedIndex={selectedIndex}/>
                        <Project index={2} name='pc-agency' image={pcAgencyImage} selectedIndex={selectedIndex}/>
                    </div>
                </div>

                <div className="embla__controls">
                    <div className="embla__buttons">
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                    </div>

                    <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={'embla__dot'.concat(
                            index === selectedIndex ? ' embla__dot--selected' : ''
                        )}
                        />
                    ))}
                    </div>
                </div>
                
            </div>
            
        </section>
    )
}

export default Projects