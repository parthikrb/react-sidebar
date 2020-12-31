import React, { Fragment } from 'react'
import { BrandContainer, Brand, BrandLogo } from './Header.style'

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
            <Brand shouldDisplay={shouldExpand}>{brandName.name}</Brand>
          </Fragment>
        ) : (
          <Brand shouldDisplay={shouldExpand}>{brandName.name}</Brand>
        )
      ) : !!brandName.logoPath ? (
        <BrandLogo src={brandName.logoPath} />
      ) : (
        <Brand shouldDisplay={!shouldExpand}>
          {brandName.name.charAt(0).toUpperCase()}
        </Brand>
      )}
    </BrandContainer>
  )
}

export default Header
