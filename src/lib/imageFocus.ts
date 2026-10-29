export type ImageFocus = 'lips' | 'center' | 'profile' | 'russian-lips'

const focusClasses: Record<ImageFocus, string> = {
  lips: 'object-[50%_88%]',
  'russian-lips': 'object-[50%_28%]',
  center: 'object-center',
  profile: 'object-center',
}

export function getImageFocusClass(focus?: ImageFocus): string {
  return focus ? focusClasses[focus] : 'object-center'
}
