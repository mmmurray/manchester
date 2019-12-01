import React, { FC } from 'react'
import styled from 'styled-components'

const DIAMETER = 24
const THROW = DIAMETER
const TRANSISITION_SPEED = 0.2
const BORDER = DIAMETER / 12
const KNOB_DIAMETER = DIAMETER - BORDER * 2

type ToggleInputProps = {
  /** Text describing the purpose of the input */
  label: string

  /** The current value of the input */
  value?: boolean

  /** Called with the current value each time it changes */
  onChange?: (value: boolean) => void
}

const VisuallyHidden = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

const Input = styled.input`
  height: 0;
  opacity: 0;
  position: absolute;
  width: 0;

  &:checked + * {
    transform: translateX(${THROW}px);
  }
`

const Rail = styled.label`
  background: ${({ theme }) => theme.accentColor};
  border-radius: ${DIAMETER / 2}px;
  box-shadow: 0 0 0 ${BORDER}px currentColor inset;
  cursor: pointer;
  display: block;
  height: ${DIAMETER}px;
  overflow: hidden;
  position: relative;
  width: ${DIAMETER + THROW}px;
`

const Cover = styled.div`
  background: currentColor;
  height: ${DIAMETER}px;
  left: ${KNOB_DIAMETER / 2}px;
  padding: ${BORDER}px 0 0 ${BORDER}px;
  position: absolute;
  transition: transform ${TRANSISITION_SPEED}s;
  width: ${DIAMETER + THROW}px;
`

const Knob = styled.div`
  background: ${({ theme }) => theme.backgroundColor};
  border-radius: ${KNOB_DIAMETER / 2}px;
  height: ${KNOB_DIAMETER}px;
  position: relative;
  right: ${KNOB_DIAMETER / 2}px;
  width: ${KNOB_DIAMETER}px;
`

const ToggleInput: FC<ToggleInputProps> = ({
  label,
  value = false,
  onChange = () => {},
}) => (
  <Rail>
    <VisuallyHidden>{label}</VisuallyHidden>
    <Input
      type="checkbox"
      checked={value}
      onChange={event => onChange(event.target.checked)}
    />
    <Cover>
      <Knob />
    </Cover>
  </Rail>
)

ToggleInput.displayName = 'ToggleInput'

export default ToggleInput
