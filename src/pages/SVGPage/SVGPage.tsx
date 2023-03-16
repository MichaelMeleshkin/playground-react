import React, { useEffect, useState } from 'react'
import PageLayout from '../../shared/components/PageLayout'
import FaIconExample from './examples/FaIconExample'
import * as FaIcons from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleDown, faArrowAltCircleUp, IconDefinition, IconPack, IconPrefix } from '@fortawesome/free-solid-svg-icons'
import sizes from './SVGPage.scss'
import {
    EA,
    EAnimate,
    EAnimateMotion,
    EAnimateTransform,
    EClipPath,
    EDefs,
    EFeBlend,
    EFeColorMatrix,
    EFeComponentTransfer,
    EFeComposite,
    EFeConvolveMatrix,
    EFeDiffuseLighting,
    EFeDisplacementMap,
    EFeDropShadow,
    EFeGaussianBlur,
    EFeMerge,
    EFeMorphology,
    EFeOffset,
    EFeSpecularLighting,
    EFeTile,
    EForeignObject,
    EG,
    EMarker,
    EMask,
    EPattern,
    ERadialGradient,
    ESymbol,
    ETextPath,
    EView,
} from './examples'
import FaIcon from '../../shared/components/FaIcon'

const HomePage: React.FC = () => {
    const iconsLimit = 100
    const defaultListClasses = 'svg-examples'
    const [icons, setIcons] = useState<[string, IconDefinition | IconPrefix | IconPack][]>([])
    const [isAllIcons, showAllIcons] = useState<boolean>(false)
    const [selectedIcon, setSelectedIcon] = useState<string | null>(null)
    const [listClasses, setListClasses] = useState<string>(defaultListClasses)
    const [isLoading, setLoading] = useState<boolean>(false)
    const iconSizes: { [key: string]: string } = sizes

    useEffect(() => {
        setIcons(getIcons().slice(0, iconsLimit))
        setLoading(false)
    }, [])

    useEffect(() => {
        const firstBtn = document.querySelector('.size-btn')
        if (firstBtn) {
            setIconState(firstBtn, 'size-50')
        }
    }, [selectedIcon])

    function getIcons(): [string, IconDefinition | IconPrefix | IconPack][] {
        return Object.entries(FaIcons)
    }

    function showMore(): void {
        setIcons(getIcons())
        showAllIcons(true)
    }

    function selectIcon(e: React.MouseEvent, id: string): void {
        e.preventDefault()
        setSelectedIcon(id)
        console.log(`You clicked: ${id}`)
    }

    function setIconState(btn: Element, className: string) {
        setListClasses(`${defaultListClasses} ${className}`)
        Array.prototype.forEach.call(document.querySelectorAll('.size-btn') || [], (item: HTMLElement) => {
            item.classList.remove('active')
        })
        btn.classList.add('active')
    }

    function setIconSizeByButton(e: React.MouseEvent<HTMLButtonElement | Element, MouseEvent>, className: string): void {
        setIconState(e.target as Element, className)
    }

    return (
        <div>
            <PageLayout pageTitle="SVG Page">
                <>
                    <p className="h4">
                        <b>Choose your icon:</b>
                    </p>
                    {icons
                        .filter(([id]) => !['fas', 'prefix'].includes(id))
                        .map(([id, val]) => (
                            <button
                                type="button"
                                className="btn btn-outline-dark me-2 mb-2"
                                key={id}
                                onClick={(e) => selectIcon(e, id)}
                            >
                                <FaIconExample name={val as IconDefinition} id={id} resetFill={true}></FaIconExample>
                            </button>
                        ))}
                    {!isAllIcons && (
                        <button type="button" className="btn btn-primary d-block me-2 mb-2" onClick={() => showMore()}>
                            Show more icons
                        </button>
                    )}
                    {selectedIcon && (
                        <div className="d-flex flex-column position-fixed bottom-0 end-0 me-3 mb-3">
                            <div className="d-flex align-items-end flex-column">
                                <button type="button" className="btn btn-outline-secondary mb-2" onClick={() => scrollTo(0, 0)}>
                                    <FaIcon name={faArrowAltCircleUp}></FaIcon>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary mb-2"
                                    onClick={() => scrollTo(0, document.body.clientHeight)}
                                >
                                    <FaIcon name={faArrowAltCircleDown}></FaIcon>
                                </button>
                            </div>
                            <div className="card d-inline-block shadow-sm">
                                <div className="card-body text-center">
                                    <p className="card-title h5">Change example icon size:</p>
                                    <div className="btn-group" role="group" aria-label="SVG icon size">
                                        {Object.keys(iconSizes).map((size, index) => (
                                            <button
                                                key={index}
                                                type="button"
                                                className="size-btn btn btn-outline-secondary"
                                                onClick={(event) => setIconSizeByButton(event, `size-${size}`)}
                                            >
                                                {size}px
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {isLoading && (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    )}
                    <hr />
                    {selectedIcon && (
                        <ul className={listClasses}>
                            <li>
                                <EA selectedIcon={selectedIcon} />
                            </li>
                            <li>
                                <EAnimate selectedIcon={selectedIcon} />
                            </li>
                            <li>
                                <EAnimateMotion selectedIcon={selectedIcon} />
                            </li>
                            <li>
                                <EAnimateTransform selectedIcon={selectedIcon} />
                            </li>
                            <li>
                                <EClipPath selectedIcon={selectedIcon} />
                            </li>
                            <li>
                                <EDefs selectedIcon={selectedIcon} />
                            </li>
                            <li>
                                <EFeBlend selectedIcon={selectedIcon} />
                            </li>
                            <li>
                                <EFeColorMatrix selectedIcon={selectedIcon} />
                            </li>
                            <li>
                                <EFeComponentTransfer selectedIcon={selectedIcon} />
                            </li>
                            <li>
                                <EFeComposite selectedIcon={selectedIcon} />
                            </li>
                            <li>
                                <EFeConvolveMatrix selectedIcon={selectedIcon} />
                            </li>
                            <li>
                                <EFeDiffuseLighting selectedIcon={selectedIcon} />
                            </li>
                            <li>
                                <EFeDisplacementMap selectedIcon={selectedIcon} />
                            </li>
                            <li>
                                <EFeDropShadow selectedIcon={selectedIcon} />
                            </li>
                            <li>
                                <EFeGaussianBlur selectedIcon={selectedIcon} />
                            </li>
                            <li>
                                <EFeMerge selectedIcon={selectedIcon} />
                            </li>
                            <li>
                                <EFeMorphology selectedIcon={selectedIcon} />
                            </li>
                            <li>
                                <EFeOffset selectedIcon={selectedIcon} />
                            </li>
                            <li>
                                <EFeSpecularLighting selectedIcon={selectedIcon} />
                            </li>
                            <li>
                                <EFeTile selectedIcon={selectedIcon} />
                            </li>
                            <li>
                                <EForeignObject selectedIcon={selectedIcon} />
                            </li>
                            <li>
                                <EG selectedIcon={selectedIcon} />
                            </li>
                            <li>
                                <EMarker selectedIcon={selectedIcon} />
                            </li>
                            <li>
                                <EMask selectedIcon={selectedIcon} />
                            </li>
                            <li>
                                <EPattern selectedIcon={selectedIcon} />
                            </li>
                            <li>
                                <ERadialGradient selectedIcon={selectedIcon} />
                            </li>
                            <li>
                                <ESymbol selectedIcon={selectedIcon} />
                            </li>
                            <li>
                                <ETextPath selectedIcon={selectedIcon} />
                            </li>
                            <li>
                                <EView />
                            </li>
                        </ul>
                    )}
                </>
            </PageLayout>
        </div>
    )
}

export default HomePage
