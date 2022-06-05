import { OperationEnum, NumberEnum } from '../../enum/calculate'

export const keymapWithEnum = [
  { name: OperationEnum.PERCENT, className: 'dark' },
  { name: OperationEnum.DIVIDE, className: 'operator' },
  { name: NumberEnum.SEVEN, className: 'normal' },
  { name: NumberEnum.EIGHT, className: 'normal' },
  { name: NumberEnum.NINE, className: 'normal' },
  { name: OperationEnum.MULTIPLY, className: 'operator' },
  { name: NumberEnum.FOUR, className: 'normal' },
  { name: NumberEnum.FIVE, className: 'normal' },
  { name: NumberEnum.SIX, className: 'normal' },
  { name: OperationEnum.MINUS, className: 'operator' },
  { name: NumberEnum.ONE, className: 'normal' },
  { name: NumberEnum.TWO, className: 'normal' },
  { name: NumberEnum.THREE, className: 'normal' },
  { name: OperationEnum.PLUS, className: 'operator' },
  { name: NumberEnum.ZERO, className: 'zero' },
  { name: OperationEnum.DOT, className: 'normal' }
]
