const data = {
  id: 0,
  childNodes: [
    {
      id: 1,
      childNodes: [
        {
          id: 2,
          childNodes: []
        },
        {
          id: 3,
          childNodes: []
        }
      ]
    },
    {
      id: 4,
      childNodes: []
    },
    {
      id: 5,
      childNodes: [
        {
          id: 6,
          childNodes: [
            {
              id: 7,
              childNodes: [
                {
                  id: 8,
                  childNodes: []
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

// resursive
function getIdsRecursive(data) {
  const result = [data.id]

  for (const node of data.childNodes) {
    result.push(...getIds(node))
  }

  return result
}

function getIds(data) {
  const result = [data]

  for (const node of result) {
    result.push(...node.childNodes)
  }

  return result.map(r => r.id)
}

getIds(data)
