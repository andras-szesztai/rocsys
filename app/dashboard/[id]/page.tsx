'use client'

interface PageProps {
    params: { id: string }
}

const SelectedRocPage = ({ params }: PageProps) => {
    // Here would be fetching single ROC
    return <h3>More info about ROC with id {params.id}</h3>
}
export default SelectedRocPage
