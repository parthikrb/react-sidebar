export const brandVariants = {
  show: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.8,
      ease: [0.83, 0, 0.17, 1]
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.2,
      duration: 0.8,
      ease: [0.83, 0, 0.17, 1]
    }
  }
}

export const menuVariants = {
  show: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.8,
      ease: [0.83, 0, 0.17, 1]
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.2,
      duration: 0.8,
      ease: [0.83, 0, 0.17, 1]
    }
  }
}

export const menuNameVariants = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.6
    }
  },
  hidden: {
    opacity: 0,
    x: -100,
    transition: {
      delay: 0.2,
      duration: 0.6
    }
  }
}

export const sidebarVariants = {
  expanded: {
    width: '20%',
    transition: {
      duration: 0.6,
      ease: [0.83, 0, 0.17, 1]
    }
  },
  collapsed: {
    width: '5%',
    transition: {
      duration: 0.8,
      ease: [0.83, 0, 0.17, 1]
    }
  }
}
