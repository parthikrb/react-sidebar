import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const BrandContainer = styled.div`
  width: 100%;
  height: 3em;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 5px gray;
  line-height: 3em;
`

export const Brand = styled(motion.div)`
  text-align: center;
  font-size: xx-large;
  font-weight: bolder;
  letter-spacing: 0.1em;
  display: ${(props) => (props.shouldDisplay ? 'block' : 'none')};
  cursor: pointer;
`

export const BrandLogo = styled.img`
  src: ${(props) => props.src};
  alt: 'Brand Logo';
  height: 48px;
  width: 48px;
  padding: 5px 5px;
`
