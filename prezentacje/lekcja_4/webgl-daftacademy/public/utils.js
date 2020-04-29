export const getRndInteger = (min, max) => {
  const rnd = Math.floor(Math.random() * (max - min + 1) ) + min;
  return rnd !== 0 ? rnd : getRndInteger(min, max)
}

export const lerp = (v0, v1, t = .05, d = .01) => {
  if (Math.abs(v1 - v0) < d) {
    return v1
  } else {
    return v0 * (1 - t) + v1 * t
  }
}

export const visibleHeightAtZDepth = ( depth, camera ) => {
  const cameraOffset = camera.position.z
  if ( depth < cameraOffset ) depth -= cameraOffset
  else depth += cameraOffset

  const vFOV = camera.fov * Math.PI / 180

  return 2 * Math.tan( vFOV / 2 ) * Math.abs( depth )
}

export const visibleWidthAtZDepth = ( depth, camera ) => {
  const height = visibleHeightAtZDepth( depth, camera )
  return height * camera.aspect
}

export const SLIDES_COUNT = 2