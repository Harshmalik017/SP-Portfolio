export const cardTones = ['blue', 'mint', 'violet', 'orange'] as const;
export const colorTones = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;

export type CardTone = (typeof cardTones)[number];
export type ColorTone = (typeof colorTones)[number];

export function cardTone(index: number): CardTone {
  return cardTones[index % cardTones.length];
}

export function colorTone(index: number): ColorTone {
  return colorTones[index % colorTones.length];
}
