import React, { useState } from 'react'
import Button from '../Button'

const useSelection = initialSelectedItem => {
  const [selectedItem, selectItem] = useState(initialSelectedItem)
  return [
    selectedItem,
    key => ({
      key,
      onClick: () => selectItem(key),
    }),
  ]
}

export default useSelection

export const Sample = () => {
  const [selectedItem, getItemProps] = useSelection(null)

  return (
    <div>
      {Array(5)
        .fill(0)
        .map((val, i) => {
          const selectItemProps = getItemProps(i)
          return (
            <Button selected={i === selectedItem} {...selectItemProps}>
              Button {i}
            </Button>
          )
        })}
    </div>
  )
}
