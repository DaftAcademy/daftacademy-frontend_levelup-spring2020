import daftcodeImgUrl from './assets/daftcode.png'

export default function() {
  const section = document.createElement('section')
  const img = document.createElement('img')
  img.src = daftcodeImgUrl
  section.appendChild(img)
  document.body.appendChild(section)
}
