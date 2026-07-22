export type ImageFocus = 'lips' | 'center' | 'profile'

const focusClasses: Record<ImageFocus, string> = {
  lips: 'object-[50%_88%]',
  center: 'object-center',
  profile: 'object-center',
}

export function getImageFocusClass(focus?: ImageFocus): string {
  return focus ? focusClasses[focus] : 'object-center'
}
