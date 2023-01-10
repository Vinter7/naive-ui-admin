function initList(m, s) {
  let lists = []
  for (let i = 1; i <= m; i++) {
    let children = []
    for (let j = 1; j <= s; j++) {
      children.push({
        label: '步骤' + j,
        key: `m${i}-step${j}`,
      })
    }
    lists.push({
      label: '任务' + i,
      key: 'mission' + i,
      children,
    })
  }
  return lists
}
