import React from 'react';
import { MainWrapper } from '../../components/MainWrapper';
import { EnigmaContent } from '../../components/EnigmaContent';
import { Title } from '../../components/Title';

export const Enigma2 = () => {
    return (
        <MainWrapper>
            <Title title="Enigma 2" enigma={2} answer="enigma2"/>
            <EnigmaContent>
                <h1>Exemplar h1</h1>
                <h2>Exemplar h2</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, voluptatibus error sapiente, quod quia aliquam dolorum saepe veritatis officiis aut veniam laboriosam ut assumenda molestiae, animi magni necessitatibus placeat quidem maiores. Vero fugit expedita nemo tenetur culpa a dolorem quod. Quibusdam dolore enim obcaecati eaque eligendi ut commodi autem! Culpa repellendus neque dolorum quibusdam repudiandae quos inventore magnam natus quaerat id. Quae ducimus eaque fugit nobis unde ab reprehenderit asperiores inventore animi ad. Recusandae illo hic ducimus ratione accusamus mollitia, alias assumenda qui animi ullam omnis ab voluptate quam pariatur dicta cum exercitationem totam asperiores commodi? Consequatur totam non vero!
                </p>
                <img src="https://via.placeholder.com/200" alt="Placeholder"/>
            </EnigmaContent>
        </MainWrapper>
    )
}