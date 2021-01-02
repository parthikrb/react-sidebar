import React, { Fragment } from 'react'
import { BrandContainer, Brand, BrandLogo } from './Header.style'
import { AnimatePresence } from 'framer-motion'
import { brandVariants } from '../../config/styles/variants'

const Header = ({ shouldExpand, brandName }) => {
  return (
    <BrandContainer>
      {/* 
                if logo path is present and sidebar is expanded, then display Logo and name
                if logo path is not present and sidebar is expanded, then display name only
                if logo path is present and sidebar is collapsed, then display logo
                if logo path is not present and sidebar is collapsed, then display first character of name
                */}
      {shouldExpand ? (
        !!brandName.logoPath ? (
          <Fragment>
            <BrandLogo src={brandName.logoPath} />
            <AnimatePresence>
              <Brand
                shouldDisplay={shouldExpand}
                layout
                variants={brandVariants}
                initial='hidden'
                animate='show'
                exit='hidden'
              >
                {brandName.name}
              </Brand>
            </AnimatePresence>
          </Fragment>
        ) : (
          <AnimatePresence>
            <Brand
              shouldDisplay={shouldExpand}
              layout
              variants={brandVariants}
              initial='hidden'
              animate='show'
              exit='hidden'
            >
              {brandName.name}
            </Brand>
          </AnimatePresence>
        )
      ) : !!brandName.logoPath ? (
        <BrandLogo src={brandName.logoPath} />
      ) : (
        <AnimatePresence>
          <Brand
            shouldDisplay={!shouldExpand}
            layout
            variants={brandVariants}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            {brandName.name.charAt(0).toUpperCase()}
          </Brand>
        </AnimatePresence>
      )}
    </BrandContainer>
  )
}

export default React.memo(Header)
