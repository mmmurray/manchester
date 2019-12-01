import React, { FC, ReactNode, useCallback, useRef } from 'react'
import styled from 'styled-components'

type SplitPanelProps = {
  leftPanel?: ReactNode
  rightPanel?: ReactNode
  leftSize?: number
  defaultLeftSize?: number
  maxLeftSize?: number
  minLeftSize?: number
  onSizeChange?(left: number): void
}

const dragCursor = 'ew-resize'
const dividerWidth = 12

const StyledContainer = styled.div.attrs<{ division: number }>(
  ({ division }) => ({
    style: {
      gridTemplateColumns: `${division}px ${dividerWidth}px 1fr`,
    },
  }),
)<{ division: number }>`
  display: grid;
  height: 100%;
  width: 100%;
`

const StyledDivider = styled.div`
  align-items: center;
  cursor: ${dragCursor};
  display: flex;
  justify-content: center;
  width: ${dividerWidth}px;
  transition: opacity 0.2s;
  opacity: 0.5;

  &::before {
    background: ${({ theme }) => theme.mutedForegroundColor};
    border-radius: 2px;
    content: '';
    display: block;
    height: 100px;
    width: 4px;
  }

  &:hover {
    opacity: 1;
  }
`

const StyledPanelContainer = styled.div`
  height: 100%;
  overflow: hidden auto;
  width: 100%;

  & > * {
    height: auto;
    min-height: 100%;
  }
`

const clamp = (value: number, min?: number, max?: number) => {
  if (min !== undefined && value < min) {
    return min
  }
  if (max !== undefined && value > max) {
    return max
  }
  return value
}

const SplitPanel: FC<SplitPanelProps> = ({
  leftPanel,
  rightPanel,
  leftSize = 0,
  defaultLeftSize,
  minLeftSize,
  maxLeftSize,
  onSizeChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const onMouseDown = useCallback(
    (mouseDownEvent: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current || !onSizeChange) {
        return
      }

      const dividerElement = mouseDownEvent.currentTarget
      dividerElement.style.opacity = '1'

      const originalBodyCursor = document.body.style.cursor
      document.body.style.cursor = dragCursor

      const originalBodyUserSelect = document.body.style.userSelect
      document.body.style.userSelect = 'none'

      const startX = mouseDownEvent.screenX
      const availableWidth = containerRef.current.clientWidth - dividerWidth

      const onMouseMove = (mouseMoveEvent: MouseEvent) => {
        const currentX = leftSize
        const deltaX = mouseMoveEvent.screenX - startX
        const newDivision = clamp(
          currentX + deltaX,
          clamp(minLeftSize || 0, 0, availableWidth),
          clamp(maxLeftSize || availableWidth, 0, availableWidth),
        )
        onSizeChange(newDivision)
      }

      const onMouseUp = () => {
        dividerElement.style.opacity = null
        document.body.style.cursor = originalBodyCursor
        document.body.style.userSelect = originalBodyUserSelect
        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseup', onMouseUp)
      }

      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseup', onMouseUp)
    },
    [leftSize, onSizeChange, containerRef],
  )

  const onDoubleClick = useCallback(() => {
    if (onSizeChange && defaultLeftSize !== undefined) {
      onSizeChange(defaultLeftSize)
    }
  }, [onSizeChange, defaultLeftSize])

  return (
    <StyledContainer ref={containerRef} division={leftSize}>
      <StyledPanelContainer>{leftPanel}</StyledPanelContainer>
      <StyledDivider
        data-testid="manchester-split-panel-divider"
        onMouseDown={onMouseDown}
        onDoubleClick={onDoubleClick}
      />
      <StyledPanelContainer>{rightPanel}</StyledPanelContainer>
    </StyledContainer>
  )
}

SplitPanel.displayName = 'SplitPanel'

export default SplitPanel
