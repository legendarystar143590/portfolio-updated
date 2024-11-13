import { TypographyVariant, TypographyRobotCondensedSize, TypographyRobotSize } from './interface'

export const getFontFamily = (variant: TypographyVariant) => {
  switch (variant) {
    case 'regular':
      return 'font-Roboto'
    case 'condensed':
      return 'font-RobotoCondensed'
    default:
      throw 'Wrong Typography variant ' + variant
  }
}

export const getFontSize = (size: TypographyRobotCondensedSize | TypographyRobotSize) => {
  switch (size) {
    /**
     * font-size: 64px
     * line-height: 90%
     * letter-spacing: -0.8px
     * font-weight: bold
     */
    case 'h1':
      return 'text-h2 md:!text-h1 leading-h1 tracking-h1 font-bold'

    /**
     * font-size: 48px
     * line-height: 90%
     * letter-spacing: -0.5px
     * font-weight: bold
     */
    case 'h2':
      return 'text-[28px] md:text-h2 leading-h2 tracking-h2 font-bold'

    /**
     * font-size: 38px
     * line-height: 90%
     * letter-spacing: -0.5px
     * font-weight: bold
     */
    case 'h3':
      return 'text-paragraph xsm:text-h4 md:!text-h3 leading-h3 tracking-h3 font-bold'

    /**
     * font-size: 28px
     * line-height: 90%
     * letter-spacing: -0.5px
     * font-weight: bold
     */
    case 'h4':
      return 'text-paragraph md:!text-h4 leading-h4 tracking-h4 font-bold'

    /**
     * font-size: 24px
     * line-height: 120%
     * letter-spacing: -0.2px
     * font-weight: 400
     */
    case 'subtitle':
      return 'text-paragraph md:!text-subtitle leading-subtitle tracking-subtitle font-bold'
    /**
     * font-size: 25px
     * line-height: 120%
     * letter-spacing: -0.2px
     * font-weight: 400
     */
    case 'subtitle-25':
      return '!text-[18px] xsm:!text-[25px] leading-subtitle tracking-subtitle font-medium'
    /**
     * font-size: 20px
     * line-height: 120%
     * letter-spacing: -0.2px
     * font-weight: 400
     */
    case 'paragraph':
      return '!text-[16px] md:!text-paragraph leading-paragraph tracking-paragraph font-normal'

    /**
     * font-size: 16px
     * line-height: 90%
     * letter-spacing: -0.8px
     * font-weight: 400
     */
    case 'body':
      return '!text-[12px] xsm:!text-body leading-body tracking-body font-normal'

    /**
     * font-size: 12px
     * line-height: 120%
     * letter-spacing: 0px
     * font-weight: 400
     */
    case 'caption':
      return 'text-caption leading-caption tracking-caption font-normal'

    /**
     * font-size: 12px
     * line-height: 120%
     * letter-spacing: 0px
     * font-weight: 400
     */
    case 'small':
      return 'text-small leading-small tracking-small font-normal'

    /**
     * font-size: 12px
     * line-height: 150%
     * letter-spacing: 0px
     * font-weight: 400
     */
    case 'sm':
      return 'text-sm leading-sm tracking-sm font-normal'

    /**
     * font-size: 14px
     * line-height: 150%
     * letter-spacing: 0px
     * font-weight: 400
     */
    case 'md':
      return 'text-sm md:text-md leading-md tracking-md font-normal'

    /**
     * font-size: 18px
     * line-height: 150%
     * letter-spacing: 0px
     * font-weight: 400
     */
    case 'lg':
      return '!text-lg leading-lg tracking-lg font-medium'
    default:
      throw 'Wrong Typography size ' + size
  }
}
