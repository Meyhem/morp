import React from 'react'

export type Page = {
  component: React.ComponentType
  props?: Record<string, any>
}

export interface RouteTable {
  pages: {
    home: Page
    users: Page
  }
}
