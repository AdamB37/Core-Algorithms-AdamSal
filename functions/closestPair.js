export default function closestPair(points) {
  const maxDistance = Infinty

  let result = {pair: [], distance: maxDistance}

  for(let i = 0; i < points.length-2; i++) {

    for(let j = i + 1; j < points.length-1; j++) {

      let x1 = points[i][0]
      let y1 = points[i][1]
      let x2 = points[j][0]
      let y2 = points[j][1]

      let x = Math.abs(x1-x2)
      let y = Math.abs(y1-y2)

      let distance = Math.sqrt( Math.pow(x,2) + Math.pow(y,2) )

      if( distance < result.distance ) {
        result.pair=[]
        result.pair.push(points[i])
        result.pair.push(points[j])
        result.distance = distance
      }

    }
  }

  return result
}
