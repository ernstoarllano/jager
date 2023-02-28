export interface GenericLayoutProps {
  children: React.ReactNode
}

export interface LayoutWithParamsProps extends GenericLayoutProps {
  params: {
    [key: string]: string
  }
}