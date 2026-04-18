declare module '@mael-667/liquid-glass-react' {
  import type {
    ComponentPropsWithoutRef,
    ElementType,
    ReactNode,
  } from 'react'

  type PolymorphicProps<T extends ElementType> = {
    as?: T
    children?: ReactNode
    className?: string
    dynamic?: boolean
    hoverable?: boolean
    large?: boolean
  } & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>

  export function LiquidGlassProvider(props: { children?: ReactNode }): ReactNode

  export function LiquidGlass<T extends ElementType = 'div'>(
    props: PolymorphicProps<T>,
  ): ReactNode

  export function Tint<T extends ElementType = 'div'>(
    props: {
      as?: T
      children?: ReactNode
      hue: string
    } & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children'>,
  ): ReactNode
}
