import { Layout } from "shared/ui/layouts/Layout.tsx"
import { TodosTabs } from "widgets/list-of-todos/ui/TodosTabs"

export const layoutWithTabs = <Layout tabsSlot={<TodosTabs />} />
