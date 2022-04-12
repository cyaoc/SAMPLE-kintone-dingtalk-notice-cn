const url = 'http://${your_domain}/send'
const option = {}

const get = (event, field) => {
  const i18n = {
    status: ['ステータス', 'status', '状态', '狀態'],
    assignee: ['作業者', 'assignee', '执行者', '執行者'],
  }
  let v
  i18n[field].some((el) => {
    v = event.record[el]
    return v
  })
  return v
}

kintone.events.on('app.record.detail.process.proceed', (event) => {
  option.next = true
  option.status = event.status.value
  return event
})
kintone.events.on('app.record.detail.show', (event) => {
  if (option.next) {
    option.next = false
    const status = get(event, 'status')
    if (status && option.status !== status.value) {
      delete option.status
      const assignee = get(event, 'assignee')
      if (assignee && assignee.value.length > 0) {
        const users = assignee.value.map((obj) => obj.code)
        kintone.proxy(
          url,
          'POST',
          { 'Content-type': 'application/json' },
          {
            domain: window.location.host,
            app: kintone.app.getId(),
            id: event.record.$id.value,
            title: document.title,
            users,
          },
          null,
        )
      }
    }
  }
  return event
})
