import { redirect } from 'next/navigation'

type Props = {}

const DashboardPage = (props: Props) => {
    redirect("/dashboard/my-profit-loss")
}

export default DashboardPage