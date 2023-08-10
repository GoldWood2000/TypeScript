import React, { ReactNode } from 'react';
import type { PropsWithChildren } from 'react'

interface ICellProps<TData> {
  field: keyof TData
}


const Cell = <T extends Record<string, any>>({ children, field }: PropsWithChildren<ICellProps<T>>) => {

  return (
    <>
      <div>{field as ReactNode}</div>
    </>
  )
}

export default Cell