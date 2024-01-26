// https://github.com/facebook/docusaurus/issues/7832

import React from 'react'
import { useLocation } from '@docusaurus/router'
import { isRegexpStringMatch } from '@docusaurus/theme-common'
import NavbarItem from '@theme-original/NavbarItem'

export default function NavbarItemWrapper(props) {
  const { pathname } = useLocation()
  if (
    !props.baseRegex ||
    isRegexpStringMatch(props.baseRegex, pathname)
  ) {
    return <NavbarItem {...props} />
  } else {
    return null
  }
}
