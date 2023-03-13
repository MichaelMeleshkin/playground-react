import React, { useEffect, useState } from 'react'
import PageLayout from '../../shared/components/PageLayout'
import FaIconExample from './examples/FaIconExample'
import * as FaIcons from '@fortawesome/free-solid-svg-icons'
import { IconDefinition, IconPack, IconPrefix } from '@fortawesome/free-solid-svg-icons'
import './SVGPage.scss'
import {
    EA,
    EAnimate,
    EAnimateMotion,
    EAnimateTransform,
    EClipPath,
    EDefs,
    EFeBlend,
    EFeColorMatrix,
    EFeComponentTransfer
} from './examples'

const HomePage: React.FC = () => {
    const iconsLimit = 100
    const defaultListClasses = 'svg-examples'
    const [icons, setIcons] = useState<[string, IconDefinition | IconPrefix | IconPack][]>([])
    const [isAllIcons, showAllIcons] = useState<boolean>(false)
    const [selectedIcon, setSelectedIcon] = useState<string | null>(null)
    const [listClasses, setListClasses] = useState<string>(defaultListClasses)
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setIcons(getIcons().slice(0, iconsLimit))
        setLoading(false)
    }, [])

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

    function setExampleIconSize(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, className: string): void {
        setListClasses(`${defaultListClasses} ${className}`)
        Array.prototype.forEach.call(document.querySelectorAll('.size-btn') || [], (item: HTMLElement) => {
            item.classList.remove('active')
        })
        const target = e.target as Element
        target.classList.add('active')
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
                    <div className="card d-inline-block shadow position-fixed bottom-0 end-0 me-4 mb-3">
                        <div className="card-body text-center">
                            <p className="card-title h5">Change example icon size:</p>
                            <div className="btn-group" role="group" aria-label="SVG icon size">
                                <button
                                    type="button"
                                    className="size-btn active btn btn-outline-secondary mb-2"
                                    onClick={(event) => setExampleIconSize(event, 'size-50')}
                                >
                                    50px
                                </button>
                                <button
                                    type="button"
                                    className="size-btn btn btn-outline-secondary mb-2"
                                    onClick={(event) => setExampleIconSize(event, 'size-100')}
                                >
                                    100px
                                </button>
                                <button
                                    type="button"
                                    className="size-btn btn btn-outline-secondary mb-2"
                                    onClick={(event) => setExampleIconSize(event, 'size-200')}
                                >
                                    200px
                                </button>
                            </div>
                        </div>
                    </div>
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
                        </ul>
                    )}
                </>
            </PageLayout>
        </div>
    )
}

export default HomePage
