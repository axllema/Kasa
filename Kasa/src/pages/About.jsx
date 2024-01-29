import React from 'react';
import Header from '../components/header';
import Banner from '../components/banner';
import CollapseSection from '../components/collapseSection';
import Footer from '../components/footer';

function About() {
    return (
        <div>
            <Header />
            <Banner showSecond={true} showFirst={false} />

            <div className='first_container'>
                <CollapseSection title="Fiabilité" containerClassName="btn_container" buttonClassName="btn-about">
                    <p> Les annonces postées sur Kasa garantissent une fiabilité totale.
                        Les photos sont conformes aux logements, et toutes les informations
                        sont régulièrement vérifiées par nos équipes.
                    </p>
                </CollapseSection>

                <CollapseSection title="Respect" containerClassName="btn_container" buttonClassName="btn-about">
                    <p> Le respect fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire
                        ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </p>
                </CollapseSection>

                <CollapseSection title="Service" containerClassName="btn_container" buttonClassName="btn-about">
                    <p> La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement
                        discriminatoire ou de perturbation du voisinage entraînera une exclusion de notreplateforme.
                        </p>
                </CollapseSection>

                <CollapseSection title="Sécurité" containerClassName="btn_container" buttonClassName="btn-about">
                    <p> La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
                        chaque logement correspond aux critères de sécurité établis par nos services.
                        En laissant une note aussi bien à l&rsquo;hôte qu&rsquo;au locataire, cela permet à
                        nos équipes de vérifier que les standards sont bien respectés. Nous organisons
                        également des ateliers sur la sécurité domestique pour nos hôtes.
                    </p>
                </CollapseSection>
            </div>
            <Footer /> 
        </div>
    );
}

export default About;