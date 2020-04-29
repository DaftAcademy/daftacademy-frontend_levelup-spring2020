const frame = document.getElementById('frame')

const appendAnimation = (node, name, callbackFn) => {
  node.style.animationName = name

  const onAnimationEnd = () => {
    node.removeEventListener("webkitAnimationEnd", onAnimationEnd)
    node.removeEventListener("animationend", onAnimationEnd)
    node.removeEventListener("oanimationend", onAnimationEnd)

    callbackFn && callbackFn()
  }

  node.addEventListener("webkitAnimationEnd", onAnimationEnd);
  node.addEventListener("animationend", onAnimationEnd);
  node.addEventListener("oanimationend", onAnimationEnd);
}

export const handleCSSAnimation = () => {
  appendAnimation(frame, 'frame-exit', () => appendAnimation(frame, 'frame-enter'))
}