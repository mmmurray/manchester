import React, { FC, ReactNode, useCallback, useRef } from 'react'
import styled from 'styled-components'

type SplitPanelProps = {
  leftPanel?: ReactNode
  rightPanel?: ReactNode
  division?: number
  defaultDivision?: number
  minimumDivision?: number
  maximumDivision?: number
  onDivisionChange?(division: number): void
}

const dragCursor = 'ew-resize'

const StyledContainer = styled.div.attrs<{ division: number }>(
  ({ division }) => ({
    style: {
      gridTemplateColumns: `${division}fr auto ${1 - division}fr`,
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
  width: 12px;
  transition: opacity 0.2s;
  opacity: 0.5;

  &::before {
    background: ${({ theme }) => theme.colors.secondaryForeground};
    border-radius: 2px;
    content: '';
    display: block;
    height: 40px;
    width: 4px;
  }

  &:hover {
    opacity: 1;
  }
`

const StyledPanelContainer = styled.div`
  height: 100%;
  overflow: hidden;
  width: 100%;
`

const clamp = (value: number, min: number, max: number) =>
  value < min ? min : value > max ? max : value

const SplitPanel: FC<SplitPanelProps> = ({
  leftPanel,
  rightPanel,
  division = 0.5,
  defaultDivision,
  minimumDivision = 0,
  maximumDivision = 1,
  onDivisionChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const onMouseDown = useCallback(
    (mouseDownEvent: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current || !onDivisionChange) {
        return
      }

      const dividerElement = mouseDownEvent.currentTarget
      dividerElement.style.opacity = '1'

      const originalBodyCursor = document.body.style.cursor
      document.body.style.cursor = dragCursor

      const originalBodyUserSelect = document.body.style.userSelect
      document.body.style.userSelect = 'none'

      const startX = mouseDownEvent.screenX
      const width = containerRef.current.clientWidth

      const onMouseMove = (mouseMoveEvent: MouseEvent) => {
        const currentX = width * division
        const deltaX = mouseMoveEvent.screenX - startX
        const newDivision = clamp(
          (currentX + deltaX) / width,
          clamp(minimumDivision, 0, 1),
          clamp(maximumDivision, 0, 1),
        )
        onDivisionChange(newDivision)
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
    [division, onDivisionChange, containerRef],
  )

  const onDoubleClick = useCallback(() => {
    if (onDivisionChange && defaultDivision !== undefined) {
      onDivisionChange(defaultDivision)
    }
  }, [onDivisionChange, defaultDivision])

  return (
    <StyledContainer ref={containerRef} division={division}>
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

export default SplitPanel
