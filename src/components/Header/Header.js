import React, { Fragment } from 'react'
import { BrandContainer, Brand, BrandLogo } from './Header.style'
import PropTypes from 'prop-types'
import { AnimatePresence } from 'framer-motion'
import { brandVariants } from '../../config/styles/variants'

const brandAnimationProps = {
  variants: brandVariants,
  initial: 'hidden',
  animate: 'show',
  exit: 'hidden'
}

const Header = ({ shouldExpand, brandName }) => {
  return (
    <BrandContainer>
      {/* 
                if logo path is present and sidebar is expanded, then display Logo and name
                if logo path is not present and sidebar is expanded, then display name only
                if logo path is present and sidebar is collapsed, then display logo
                if logo path is not present and sidebar is collapsed, then display first character of name
                */}
      <AnimatePresence>
        {shouldExpand ? (
          !!brandName.logoPath ? (
            <Fragment>
              <BrandLogo src={brandName.logoPath} />
              <Brand
                shouldDisplay={shouldExpand}
                layout
                {...brandAnimationProps}
              >
                {brandName.name}
              </Brand>
            </Fragment>
          ) : (
            <Brand shouldDisplay={shouldExpand} layout {...brandAnimationProps}>
              {brandName.name}
            </Brand>
          )
        ) : !!brandName.logoPath ? (
          <BrandLogo src={brandName.logoPath} />
        ) : (
          <Brand shouldDisplay={!shouldExpand} layout {...brandAnimationProps}>
            {brandName.name.charAt(0).toUpperCase()}
          </Brand>
        )}
      </AnimatePresence>
    </BrandContainer>
  )
}

Header.propTypes = {
  brandName: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logoPath: PropTypes.string
  }),
  shouldExpand: PropTypes.bool.isRequired
}

export default React.memo(Header)
