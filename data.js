var properties = [
  {
    label: 'Flex Direction',
    key: 'flexDirection',
    definition: 'This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.',
    options: [
      {
        key: 'row',
        value: 'row',
        description: 'row (default): left to right in ltr; right to left in rtl'
      },
      {
        key: 'row-reverse',
        value: 'row-reverse',
        description: 'row-reverse: right to left in ltr; left to right in rtl'
      },
      {
        key: 'column',
        value: 'column',
        description: 'column: same as row but top to bottom'
      },
      {
        key: 'column-reverse',
        value: 'column-reverse',
        description: 'column-reverse: same as row-reverse but bottom to top'
      }
    ]
  },

  {
    label: 'Flex Wrap',
    key: 'flexWrap',
    definition: 'By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.',
    options: [
      {
        key: 'nowrap',
        value: 'nowrap',
        description: 'nowrap (default): all flex items will be on one line'
      },
      {
        key: 'wrap',
        value: 'wrap',
        description: 'wrap: flex items will wrap onto multiple lines, from top to bottom'
      },
      {
        key: 'wrap-reverse',
        value: 'wrap-reverse',
        description: 'wrap-reverse: flex items will wrap onto multiple lines from bottom to top'
      },
    ]
  },

  {
    label: 'Justify Content',
    key: 'justifyContent',
    definition: 'This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.',
    options: [
      {
        key: 'flex-start',
        value: 'flex-start',
        description: 'flex-start (default): items are packed toward the start of the flex-direction.'
      },
      {
        key: 'flex-end',
        value: 'flex-end',
        description: 'flex-end: items are packed toward the end of the flex-direction.'
      },
      {
        key: 'center',
        value: 'center',
        description: 'center: items are centered along the line'
      },
      {
        key: 'space-between',
        value: 'space-between',
        description: 'space-between: items are evenly distributed in the line; first item is on the start line, last item on the end line'
      },
      {
        key: 'space-around',
        value: 'space-around',
        description: 'space-around: items are evenly distributed in the line with equal space around them. Note that visually the spaces aren’t equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.'
      },
      {
        key: 'space-evenly',
        value: 'space-evenly',
        description: 'space-evenly: items are distributed so that the spacing between any two items (and the space to the edges) is equal.'
      },
      {
        key: 'start',
        value: 'start',
        description: 'start: items are packed toward the start of the writing-mode direction.'
      },
      {
        key: 'end',
        value: 'end',
        description: 'end: items are packed toward the end of the writing-mode direction.'
      },
      {
        key: 'left',
        value: 'left',
        description: 'left: items are packed toward left edge of the container, unless that doesn’t make sense with the flex-direction, then it behaves like start.'
      },
      {
        key: 'right',
        value: 'right',
        description: 'right: items are packed toward right edge of the container, unless that doesn’t make sense with the flex-direction, then it behaves like end.'
      },
    ]
  },

  {
    label: 'Align Items',
    key: 'alignItems',
    definition: 'This defines the default behavior for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis).',
    options: [
      {
        key: 'stretch',
        value: 'stretch',
        description: 'stretch (default): stretch to fill the container (still respect min-width/max-width)'
      },
      {
        key: 'flex-start',
        value: 'flex-start',
        description: 'flex-start / start / self-start: items are placed at the start of the cross axis. The difference between these is subtle, and is about respecting the flex-direction rules or the writing-mode rules.'
      },
      {
        key: 'flex-end',
        value: 'flex-end',
        description: 'flex-end / end / self-end: items are placed at the end of the cross axis. The difference again is subtle and is about respecting flex-direction rules vs. writing-mode rules.'
      },
      {
        key: 'center',
        value: 'center',
        description: 'center: items are centered in the cross-axis'
      },
      {
        key: 'baseline',
        value: 'baseline',
        description: 'baseline: items are aligned such as their baselines align'
      },
    ]
  },

  {
    label: 'Align Content',
    key: 'alignContent',
    definition: 'This aligns a flex container’s lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.',
    options: [
      {
        key: 'normal',
        value: 'normal',
        description: 'normal (default): items are packed in their default position as if no value was set.'
      },
      {
        key: 'flex-start',
        value: 'flex-start',
        description: 'flex-start / start: items packed to the start of the container. The (more supported) flex-start honors the flex-direction while start honors the writing-mode direction.'
      },
      {
        key: 'flex-end',
        value: 'flex-end',
        description: 'flex-end / end: items packed to the end of the container. The (more support) flex-end honors the flex-direction while end honors the writing-mode direction.'
      },
      {
        key: 'center',
        value: 'center',
        description: 'center: items centered in the container'
      },
      {
        key: 'space-between',
        value: 'space-between',
        description: 'space-between: items evenly distributed; the first line is at the start of the container while the last one is at the end'
      },
      {
        key: 'space-around',
        value: 'space-around',
        description: 'space-around: items evenly distributed with equal space around each line'
      },
      {
        key: 'space-evenly',
        value: 'space-evenly',
        description: 'space-evenly: items are evenly distributed with equal space around them'
      },
      {
        key: 'stretch',
        value: 'stretch',
        description: 'stretch: lines stretch to take up the remaining space'
      },
    ]
  },
  /*
  {
    label: 'ppp',
    key: 'pppp',
    definition: 'ppp',
    options: [
      {
        key: 'ppp',
        value: 'ppp',
        description: 'pppp'
      },
    ]
  },
  */
]