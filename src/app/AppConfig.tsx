import { App } from 'antd'
import { type PropsWithChildren } from 'react'

interface AppConfigProps extends PropsWithChildren {}

export default function AppConfig(props: AppConfigProps) {
  return <App message={{ maxCount: 1 }} {...props} />
}
