export let BLUR_IMAGE_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcvWS1LgAGJQIpt50GkgAAAABJRU5ErkJggg=='

export let LOGO_IMAGE_PATH = '/static/images/logo.jpg'

export let HEADER_HEIGHT = '140px' // 132px on mobile
export let FOOTER_HEIGHT = '0px' // 116px atm
export let MAIN_CONTENT_MIN_HEIGHT = `calc(100svh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT})`

export let SITE_URL = 'https://cursoidealtec.com.br'

export let TOKEN_CLASSNAME_MAP = {
  tag: 'text-code-red',
  'attr-name': 'text-code-yellow',
  'attr-value': 'text-code-green',
  deleted: 'text-code-red',
  inserted: 'text-code-green',
  punctuation: 'text-code-white',
  keyword: 'text-code-purple',
  string: 'text-code-green',
  function: 'text-code-blue',
  boolean: 'text-code-red',
  comment: 'text-gray-500 italic',
}
