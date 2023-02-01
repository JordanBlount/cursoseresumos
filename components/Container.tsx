import clsx from 'clsx'
import type React from 'react'

export const Container = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div className={clsx('mx-auto max-w-3xl px-5 lg:px-0 xl:max-w-5xl', className)}>{children}</div>
  )
}

export default Container
