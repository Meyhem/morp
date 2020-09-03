import React from 'react'
import { mapProps } from 'recompose'

import { RouteTable, Page } from './types'
import { routeTable } from './route-table'

export function resolvePage(
  pageName: keyof RouteTable['pages']
): React.ComponentType {
  const p = routeTable.pages[pageName]
  if (!p) {
    throw new Error(`Page cannot be resolved by routing table '${pageName}'`)
  }

  return mapProps(() => p.props)(p.component)
}
