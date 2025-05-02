import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import RollingGallery from '@/Components/RollingGallery';

export default function Dashboard() {
    return (
        <RollingGallery autoplay={true} pauseOnHover={true} />

    );
}
