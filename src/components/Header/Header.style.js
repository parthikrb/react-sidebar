import styled from '@emotion/styled'

export const BrandContainer = styled.div`
  width: 100%;
  height: 3em;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 5px gray;
  line-height: 3em;
`

export const Brand = styled.h3`
  text-align: center;
  font-size: xx-large;
  font-weight: bolder;
  letter-spacing: 0.1em;
  display: ${(props) => (props.shouldDisplay ? 'block' : 'none')};
  transition: ease-in display;
  transition-delay: 0.3s;
`

export const BrandLogo = styled.img`
  src: ${(props) => props.src};
  alt: 'Brand Logo';
  height: 48px;
  width: 48px;
  padding: 5px 5px;
`
