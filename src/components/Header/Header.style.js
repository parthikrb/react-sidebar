import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const BrandContainer = styled.div`
  width: 100%;
  height: 3em;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 5px gray;
  line-height: 3em;
  background-color: ${(props) => props.theme.header.backgroundColor};
`

export const Brand = styled(motion.div)`
  text-align: center;
  font-size: xx-large;
  font-weight: bolder;
  letter-spacing: 0.1em;
  color: ${(props) => props.theme.header.color};
  display: ${(props) => (props.shouldDisplay ? 'block' : 'none')};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.header.hoverColor};
  }
`

export const BrandLogo = styled.img`
  src: ${(props) => props.src};
  alt: 'Brand Logo';
  height: 48px;
  width: 48px;
  padding: 5px 5px;
`
