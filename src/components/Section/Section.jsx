import React from 'react';
import PropTypes from 'prop-types';
import { SectionWrap, Title } from './Section.module';
export const Section = ({tittle, children}) => {
    return (
        <SectionWrap>
            <Title>{tittle}</Title>
            {children}
        </SectionWrap>
    )
}

Section.propTypes = {
    tittle: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };